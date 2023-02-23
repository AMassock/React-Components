import React from 'react';
import './Submit.css';

export default function Submit (props) {
    
    let classList = '';
    const text = "text"

    if (props.med) {
        classList += ` sub-med`
    }

    if (props.large) {
        classList += ` sub-large`
    }

    return(
        <form>
            <label>{props.label}</label>
            <br></br>
            <input placeholder={(props.label !=='') ? props.label : text} className={classList}></input>
            <button className={classList}>{props.btn}</button>
        </form>
    )
}