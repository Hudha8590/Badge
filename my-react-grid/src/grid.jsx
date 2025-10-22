import React from "react";
import "./grid.css";
import { useState } from "react";
function SimpleGrid() {
    const handleclick=()=>{
       setColor1(!color1)
       setColor2(!color2)
       setColor3(!color3)
       setColor4(!color4)
       setColor5(!color5)
    }
 const [color1,setColor1]=useState(true)
 
 const [color2,setColor2]=useState(true)
 
 const [color3,setColor3]=useState(true)
 

 
 const [color4,setColor4]=useState(true)
 
 const [color5,setColor5]=useState(true)
 
 const [color6,setColor6]=useState(true)
  return (
    <div className="grid-container">
      <div onClick={()=>{setColor1(!color1)}} style={{background:color1?"green":"white"}} className="grid-item">1</div>
      <div onClick={()=>{setColor2(!color2)}} style={{background:color2?"green":"white"}} className="grid-item">2</div>
      <div onClick={()=>{setColor3(!color3)}} style={{background:color3?"green":"white"}} className="grid-item">3</div>
      <div onClick={()=>{setColor4(!color4)}} style={{background:color4?"green":"white"}} className="grid-item">4</div>
      <div onClick={()=>{setColor5(!color5)}} style={{background:color5?"green":"white"}} className="grid-item">5</div>
      <div onClick={()=>{handleclick()}} style={{background:"white"}} className="grid-item">6</div>
    </div>
  );
}

export default SimpleGrid;
