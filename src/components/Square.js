import React, { useState } from "react";
import './styles/Square.css';

function Square(props) {
    //const [val, setVal] = useState(null);
    return (
        //<button className="square" onClick={() => setVal("X")}> 
        <button className="square" onClick={props.onClick}> 
            {props.val}
        </button>
    )
}

export default Square;