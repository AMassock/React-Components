import React from 'react';
import './Form.css';

function Form (props) {
    
    let classList = '';
    const text = "text"

    if (props.med) {
        classList += ` form-med`
    }

    if (props.large) {
        classList += ` form-large`
    }

    return(
        <form>
            <label>{props.label}</label>
            <br></br>
            <input placeholder={(props.label !=='') ? props.label : text} className={classList}></input>
        </form>
    )
}

export default Form; 