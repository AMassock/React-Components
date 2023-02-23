import React from 'react';
import './Selection.css';

function Form (props) {
    console.log(props);
    const options = [
        { value: "one", label:"one"}
    ]
    
    let classList = '';
    const text = "text"

    if (props.med) {
        classList += ` select-med`
    }

    if (props.large) {
        classList += ` select-large`
    }

    return(
        <div>
            <label for={props.label}></label>
            <select id={(props.label !=='') ? props.label : text} className={classList}>
                <option>{props.placeholder}</option>
                <option>{options.value}</option>
            </select>
        </div>
    )
}

export default Form; 