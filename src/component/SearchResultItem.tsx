import type { CSSProperties } from "react"

interface cardProduct{
    product:string,
    price:number,
    image:string
}

const SearchResultItem = ({product,price,image}:cardProduct)=>{
    const styles: Record<string, CSSProperties> = {
    card: {
      width: "220px",
      borderRadius: "12px",
      border: "1px solid #e0e0e0",
      padding: "16px",
      backgroundColor: "#ffffff",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      fontFamily: "system-ui, sans-serif",
      transition: "transform 0.2s ease",
    },
    imageContainer: {
      width: "100%",
      height: "150px",
      borderRadius: "8px",
      overflow: "hidden",
      backgroundColor: "#f9f9f9",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    img: {
      maxWidth: "100%",
      maxHeight: "100%",
      objectFit: "contain",
    },
    title: {
      fontSize: "16px",
      fontWeight: "600",
      color: "#1a1a1a",
      margin: 0,
      // Limita el texto a 2 líneas si es muy largo
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    },
    price: {
      fontSize: "18px",
      fontWeight: "700",
      color: "#0070f3",
      margin: 0,
    }
  };

    return(    
    <div  style={styles.card} >
        <img src={image} alt={product} style={styles.img}  />
        <h1 style={styles.title} >{product}</h1>
        <h2 style={styles.price} >{price}</h2>
 


    </div>
    
    
)

}
export default SearchResultItem