import React from "react";

import './style.css';

/*
    General Button Component For all Buttons in the project
    with general style, can override the style for any specific button
*/

const Button = ({ handleClick, isDisabled, children }) => {
    return (
        <button className='btn'
            onClick={handleClick}
            disabled={isDisabled}
        >
            {children}
        </button>
    )
}
export default Button;