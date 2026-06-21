import { useEffect,useState } from 'react'
import './App.css'
import FormSearch from './component/formSearch'
import SearchResultItem from './component/SearchResultItem'

interface product {
  title:string,
  price:number,
  image:string,
  id:number
}

function Form (){


  const [data, setData] = useState<product[]>([])
  const [findData,setFindData] = useState<product[]>([])

  useEffect( ()=>{
    const controller = new AbortController()

    //traemos la data para luego filtrarla
    const dataFetch = async ()=>{
      const response = await fetch("https://fakestoreapi.com/products", {signal:controller.signal})
      const allProduct = await response.json()
      setData(allProduct )
    }

    dataFetch()
    return  () =>{ controller.abort()}
    
  },[])

  //traemos la busqueda y la comparamos con la bd

  function handlerSearch(name:string){
    const findProduct = data.filter((e)=>{
      return  e.title.toLowerCase().includes(name.toLowerCase())
    })

    setFindData(findProduct)

  }

  return ( 
    <>
      <FormSearch handlerSearch={handlerSearch} />
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
        {findData.map((d) => {
          return <SearchResultItem key={d.id} product={d.title} price={d.price} image={d.image} />
        })}
      </div>
    </>
  )

}

export default Form