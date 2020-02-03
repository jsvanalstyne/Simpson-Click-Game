import React from "react";
import "./style.css"

function Nav(props){
return(
    <ul className="nav">
    <li className="nav-item">
    <h1><a className="nav-link" href="/">Clicky Game</a></h1>
    </li>
    <li className="nav-item">
     <h1>{props.start}</h1>
    </li>
    <li className="nav-item">
        <h2>Score: {props.score} | Topscore: {props.topscore}</h2>
      
    </li>
    
  </ul>
)


}
export default Nav;