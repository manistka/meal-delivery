import React from "react";

const Input = ({ label, classes }) => {
    return (
        <div className={classes}>
            <label>{label}</label>
            <input></input>
        </div>
    );
};

export default Input;
