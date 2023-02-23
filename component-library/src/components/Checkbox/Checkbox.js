import React from "react";
import './Checkbox.css';

export default function Checkbox(props) {

    return(
        <form>
            <div>
                <label className="container">{props.label}</label>
                <input type="checkbox" className="checkbox"></input>
                <span className={`check-${props.color}`}></span>
            </div>
        </form>
    )
}