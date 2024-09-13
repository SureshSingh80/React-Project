import React from 'react'
import { useState } from 'react';
import './Calculator.css';
const Calculator = () => {

    const [output,setOutput]=useState("");
    const [pressEqual,setPressEqual]=useState(false);

    const handleClick=(e)=>{

        if(e.target.value==="C"){
            setOutput("");
        }
        else if(e.target.value==="<"){
            setOutput(output.slice(0,-1));
        }
        else if(e.target.value==="%"){
            if(output.includes("*")){
                const [operand1,operand2]=output.split("*").map(parseFloat);
                let percent=(operand1*operand2)/100;
                setOutput(percent);
            }
            else
              setOutput(output/100);
        }
        else if(e.target.value==="="){
            try
            {
                let res=eval(output);
                if(res===undefined){
                    setOutput("");
                }
                else 
                   setOutput(eval(output));
            }
            catch(error){
                setOutput("Error!");
                
            }
            setPressEqual(true);
            
        }
        else{
            
            if(pressEqual===true){
                setOutput("");
                setPressEqual(false);
            }
            setOutput((prev)=>{
                return prev+e.target.value;  
          });
        }
        
    }
  return (
    <div className="container">
        <div className="calc">
            <div className="display"><span>{output}</span></div>
            <div className="buttons">
              <div>
                <button onClick={handleClick} value="C">C</button>
                <button onClick={handleClick} value="<">&lt;</button>
                <button onClick={handleClick} value="%">%</button>
                <button onClick={handleClick} value="/">/</button>
              </div>
              <div>
                <button onClick={handleClick} value="7">7</button>
                <button onClick={handleClick} value="8">8</button>
                <button onClick={handleClick} value="9">9</button>
                <button onClick={handleClick} value="*">*</button>
              </div>
              <div>
                <button onClick={handleClick} value="4">4</button>
                <button onClick={handleClick} value="5">5</button>
                <button onClick={handleClick} value="6">6</button>
                <button onClick={handleClick} value="-">-</button>
              </div>
              <div>
                <button onClick={handleClick} value="1">1</button>
                <button onClick={handleClick} value="2">2</button>
                <button onClick={handleClick} value="3">3</button>
                <button onClick={handleClick} value="+">+</button>
              </div>
              <div>
                <button onClick={handleClick} value="0">0</button>
                <button onClick={handleClick} value="00">00</button>
                <button onClick={handleClick} value=".">.</button>
                <button onClick={handleClick} value="=">=</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Calculator