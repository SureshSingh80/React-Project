import React from 'react'
import '../Styles/Order.css'
const Order = ({order,cancelOrder}) => {
  let order_price=0;
  let day=Math.floor(Math.random()*30)+1;                                   
  let month=Math.floor(Math.random()*12)+1;
  let year="2024";
  let expectedDate=day+"/"+month+"/"+year;
  return (
    <div>
        {
            order.map((item)=>{
                order_price=order_price+item.price;
                return <div className="order-items" key={item.id}>
                           <img src={item.img}/>
                           <div className='item-details'>
                                <h2>{item.title}</h2><br />
                                <p>{item.author}</p><br />
                                <b><i><p>Price: {item.price} <span>&#8377;</span></p></i></b><br />
                                <b><i>Expected Delivery Date: {expectedDate} </i></b><br /><br />
                                <button onClick={()=>cancelOrder(item)}>Cancel Order</button>
                           </div>
                           
                       </div> 
                      
            })
           
        }
         <h2 style={{color:"orange", float:"right",margin:"4rem 2rem 2rem 0rem"}}>Total Order Price: {order_price} </h2>
    </div>
  )
}

export default Order