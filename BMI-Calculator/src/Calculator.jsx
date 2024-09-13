import React, { useEffect, useMemo, useState } from 'react'
import './Calculator.css'
const Calculator = () => {

  let [weight,setWeight]=useState(52);
  let [height,setHeight]=useState(150);
  let [healthStatus,setHealthStatus]=useState("");
  let [color,setColor]=useState("green");

  let output=useMemo(()=>{
      let heightmeter=height/100;

      return ((weight/(heightmeter*heightmeter))).toFixed(1);
  },[weight,height]);

  useEffect(()=>{

      if(output>=1 && output<18.5){
        setHealthStatus("UnderWeight");
        setColor("red");
      }

      if(output>=18.5 && output<=24.9){
          setHealthStatus("Healthy");
          setColor("green");
      }

      if(output>=25 && output<=29.9){
        setHealthStatus("OverWeight");
        setColor("orange");
    }

    if(output>=30 && output<=34.9){
      setHealthStatus("Obese (Moderate Risk) ");
      setColor("rgb(233, 56, 56)");
    }

    if(output>=35 && output<=39.9){
      setHealthStatus("Obese (High Risk) ");
      setColor("rgb(224, 28, 28");
    }

    if(output>=40 && output<=102.2){
      setHealthStatus("Obese (Very High Risk) ");
      setColor("red");
    }
      
  },[weight,height]);

  let handleWeightChange=(e)=>{
      setWeight(e.target.value);
  }


  let handleHeightChange=(e)=>{
     setHeight(e.target.value);
  }
  return (
    <div className="container">
        <div className="title-section">
          <h2>BMI Calculator</h2>
        </div>
        <div className="input-section">
          <div className="weight-input">
            <span>Weight:{weight} kg</span>
            <input type="range" onChange={handleWeightChange} min="30" max="200" value={weight}/>
         </div>

         <div>
            <span className="height-input">height:{height} cm</span>
            <input type="range" onChange={handleHeightChange} min="140" max="220" value={height}/>
         </div>
            
        </div>
        <div className="output-section">
            <h4>Your BMI is</h4>
            <p>{output}</p>
        </div>
        <p style={{color:"rgb(76, 6, 76)"}}>Status: <span style={{color}}><b>{healthStatus}</b></span>  </p>
    </div>
    
  )
}

export default Calculator