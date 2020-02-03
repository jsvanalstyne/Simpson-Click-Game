import React from "react";
import "./style.css";

function Jumbo(props) {
  return (
    <div className="jumbo text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Jumbo;