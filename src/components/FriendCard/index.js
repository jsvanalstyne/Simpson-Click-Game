import React from "react";
import "./style.css"

function FunCard(props) {
    return (
       
            
            <img className="images col-2" onClick={() => props.handleClick(props.id)} clicked={props.clicked} key={props.id} id={props.id} src={props.url} alt="..." />
     
            // </div>
            )
        
     }
        
export default FunCard