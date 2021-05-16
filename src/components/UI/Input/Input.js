import React from "react";

const Input = ({ label, classes, value, handleChange }) => {
    return (
        <div className={classes}>
            <label>{label}</label>
            <input value={value} onChange={handleChange}></input>
        </div>
    );
};

export default Input;
