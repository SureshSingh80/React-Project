import React, { useState } from 'react'
import './ExpenseTracker.css';
const ExpenseTracker = () => {
    const [expense,setExpense]=useState("");
    const [amount,setAmount]=useState("");
    const [data,setData]=useState([]);

    const handleExpenseChange=(e)=>{
         setExpense(e.target.value);
         
    }
    const handleAmountChange=(e)=>{
        setAmount(e.target.value);
    }
    const handleSubmit=(e)=>{
          e.preventDefault();
          if(!expense || !amount)
              return;
          let newData={
              id:data.length+1,
              title:expense,
              price:amount,
          }
          setData([...data,newData]);
          setAmount("");
          setExpense("");
    }

    const handleDelete=(id)=>{
        setData(data.filter((datum)=>{
            return datum.id!==id;
    }))
    }
  return (    
    
    <div className="container">
        <div className="tracker-container">
            <h1>Expense Tracker</h1>
            <div className="input-section">
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" placeholder='Expense' value={expense} onChange={handleExpenseChange} /><br /><br />
                    <input type="text" placeholder='Amount' value={amount}  onChange={handleAmountChange} />
                    <button className="submit-btn" onClick={handleSubmit}>Add Expense</button>
                </form>
                <ul>
                    {
                        
                        data.map((datum)=>{
                             
                        return <div key={datum.id}>
                             <li  className="flex-div">
                                <span style={{display:"block"}}>{datum.title}</span>
                                <span style={{display:"block"}}>{datum.price}$</span>
                                <span style={{display:"block"}}><button onClick={()=>handleDelete(datum.id)} className="del-btn">Delete</button> </span>  
                             </li>
                             </div>
                        })
                    }
                   
             </ul>

            </div>
           
            
        </div>
                
    </div>
  )
}

export default ExpenseTracker