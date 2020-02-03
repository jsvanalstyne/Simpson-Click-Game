import React from "react";
import "./style.css"

function FunCard(props) {
    return (
        <div>
            <div className="card col-2 ml-3 mr-3 mb-3">
            <img className="images" onClick={() => props.handleClick(props.id)} clicked={props.clicked} key={props.id} id={props.id} src={props.url} className="card-img-top" alt="..." />
        </div>
            </div>
            )
        
     }
        
export default FunCard