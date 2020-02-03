import React from "react";
import "./style.css"

function FunCard(props) {
    return (
        <div>
            <div className="card col-3 mt-3 ml-3 mr-3 mb-3 shadow p-3 mb-5 bg-white rounded">
            <img className="images" onClick={() => props.handleClick(props.id)} clicked={props.clicked} key={props.id} id={props.id} src={props.url} alt="..." />
        </div>
            </div>
            )
        
     }
        
export default FunCard