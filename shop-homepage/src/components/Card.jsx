import React from 'react'
import '../Styles/Card.css'
const Card = ({item,addCart,buyProduct}) => {
 const {title,price,author,img}=item;
  return (
    <div className="card">
        <img src={img}/>
        <h3>{title}</h3><br />
        <p>{author}</p><br />
        <p><b>Price:</b> {price} <span>&#8377;</span></p>
        <button onClick={()=>addCart(item)}>Add to Cart</button>
        <button className="buy-btn" onClick={()=>buyProduct(item)}>Buy Now</button>
        
    </div>
  )
}

export default Card