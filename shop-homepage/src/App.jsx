import Shop from "./components/Shop"
import Navbar from "./components/Navbar"
import Demo from "./Demo"
import { useState } from "react"
import Cart from "./components/Cart";
import Order from "./components/Order";

function App() {
  
  let [cart,setCart]=useState([]);
  let [order,setOrder]=useState([]);
  let [showCart,setShowCart]=useState(false);
  let [showOrder,setShowOrder]=useState(false);

  let isPresent=false;

  let addCart=(newProduct)=>{
      
    if(isPresent==false){
      cart.forEach((item)=>{
        if(newProduct.id===item.id){
            isPresent=true;
        }
     })
      if(isPresent){
        alert("Item already in cart"); 
        isPresent=false;
        return;
      }
      else 
        setCart([...cart,newProduct]);
    }
     
      
  }

  let displayCart=()=>{
     setShowCart(true);
     setShowOrder(false);
  }

  let displayHomepage=()=>{
      setShowCart(false);
      setShowOrder(false);
  }

  let removeCart=(id)=>{
      setCart(cart.filter((item)=>item.id!==id));
  }
  let buyProduct=(item)=>{
      setOrder([...order,item]);
  }
  let displayOrder=()=>{
      setShowOrder(true);
      setShowCart(false);
  }
  let cancelOrder=(item)=>{
      console.log(item);
      setOrder(order.filter((individualOrder)=>individualOrder.id!=item.id));

  }

  return (
    <div>
      <Navbar cart={cart.length} displayCart={displayCart} displayHomepage={displayHomepage} displayOrder={displayOrder}></Navbar>
      {showCart?<Cart cart={cart} removeCart={removeCart} displayHomepage={displayHomepage} buyProduct={buyProduct}></Cart>:showOrder?<Order cancelOrder={cancelOrder} order={order}></Order>:<Shop addCart={addCart} buyProduct={buyProduct}></Shop>}
               
    </div>
  )
}

export default App
