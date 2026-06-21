import { useState, type ChangeEvent, type SubmitEvent} from "react"
//typeo la funcion para que no me de error 
interface FormSearchProps {
  handlerSearch: (word: string) => void;
}

function FormSearch({handlerSearch}:FormSearchProps){
    
    //establecemos un estado para guardar y settear los cambio del input
    const [word, setWord] = useState("")

    //funcion que se ejecuta con el cambio del input "e" evento del input
    function handlerSetInput(e:ChangeEvent<HTMLInputElement>){
         setWord(e.target.value)
    }
    //
    function handlerSetValue(e: SubmitEvent<HTMLFormElement>){
        e.preventDefault()
        handlerSearch(word)

    }


    return(
<form onSubmit={handlerSetValue} style={{ display: "flex", gap: "8px", maxWidth: "400px", margin: "20px auto" }}  >
            <input value={word} onChange={handlerSetInput} style={{ flex: 1, padding: "8px 12px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "14px", outline: "none" }}></input>
            <button type="submit" style={{ padding: "8px 16px", borderRadius: "6px", border: "none", backgroundColor: "#0070f3", color: "#fff", fontSize: "14px", fontWeight: "500", cursor: "pointer" }}>Buscar</button>
        </form>
    )

}

export default FormSearch