import React from 'react'
import '../Styles/Cart.css'
const Cart = ({cart,removeCart,displayHomepage,buyProduct}) => {
  let totalPrice=0;
  return (
    <div >
         <span className="material-symbols-outlined add-cart" onClick={displayHomepage}>add_box</span>
           {
            cart.map((item)=>{
                totalPrice=totalPrice+item.price;
                return <div className="cart-items" key={item.id}>
                           <img src={item.img}/>
                           <div className='item-details'>
                                <h2>{item.title}</h2><br />
                                <p>{item.author}</p><br />
                                <p>Price: {item.price} <span>&#8377;</span></p><br />
                                <button onClick={()=>removeCart(item.id)} className="remove-btn">Remove</button>
                                <button className="buy-btn" onClick={()=>buyProduct(item)}>Buy Now</button>
                           </div>
                
                       </div> 
            })
        }
       {cart.length>0?<h2 style={{color:"orange", float:"right",margin:"4rem 2rem 2rem 0rem"}}>Total Price: {totalPrice} </h2>:""}
    </div>
  )
}

export default Cart