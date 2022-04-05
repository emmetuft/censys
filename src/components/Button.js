import React from 'react';
import './../App.css';

export default function Button(props) {

    const { text, handleClick } = props

    return (
        <div className="submit-button" onClick={() => handleClick()}>
            {text}
        </div>
    )
}
