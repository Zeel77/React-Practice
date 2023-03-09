import React from "react";
import './Custom.css'

function Customs (props) {
    return <div className="Custom">{props.greetings}, {props.name} {props.age>20 ? <p>old</p> : <p>young</p>}</div> //ternary operator in jsx
}

export default Customs;
