import React from "react";
import "./style.css"

function FunCard(props) {
    return (
       
            // Image with onclick function and passing the id of the image into the function. 
            <img className="images col-2" onClick={() => props.handleClick(props.id)}  key={props.id} id={props.id} src={props.url} alt="..." />
     
           
            )
        
     }
        
export default FunCard