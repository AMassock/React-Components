import React, { useState } from "react";
import "./Counter.css";

export default function Counter(props){
    let [count, updateCount] = useState(props.start);

    function add() {
        if(count > (props.min) ) {
            updateCount(count - (props.value) );
        }
    }
    function sub() {
        if(count < (props.max) )
            updateCount(count + (props.value) );
    }
    
    return(
        <div className="contain">
            <button className="btn" onClick={sub}>-</button>
            <p>{count}</p>
            <button className="btn" onClick={add}>+</button>
        </div>
    )
}
