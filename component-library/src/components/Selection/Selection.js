import React from 'react';
import './Selection.css';

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
        <div>
            <label for={props.label}></label>
            <select id={(props.label !=='') ? props.label : text} className={classList}></select>
        </div>
    )
}

export default Form; 