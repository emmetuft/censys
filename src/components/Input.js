import React from 'react';
import './../App.css';

export default function Input(props) {

    const { onChange, onKeyDown } = props

    return (
        <input
            className="styled-input"
            placeholder="Please enter an IPv4 address"
            onChange={e => onChange(e)}
            onKeyDown={onKeyDown}
        />
    );
}