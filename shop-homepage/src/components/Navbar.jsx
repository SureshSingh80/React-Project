import React from 'react'
// import { FaBeer } from 'react-icons/fa';
import '../Styles/Navbar.css'
const Navbar = ({cart,displayCart,displayHomepage,displayOrder}) => {
  return (
    <nav>
       
        <span onClick={displayHomepage} className="material-symbols-outlined homepage">house</span>
        <button className="order-btn" onClick={displayOrder}>Your Orders</button>  
        <div onClick={displayCart}>
          
          <span className="material-symbols-outlined cart">add_shopping_cart</span>
          <span className="cart-number">{cart}</span>
       </div>
        
    </nav>
  )
}

export default Navbar