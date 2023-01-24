import React from 'react';
import './Form.css';

function Form (props) {
    return(
        <form>
            <label>{props.label}</label>
            <input placeholder={props.label}></input>
        </form>
    )
}

export default Form; 