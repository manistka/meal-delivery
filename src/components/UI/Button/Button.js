import React from "react";
import classes from "./Button.module.scss";

const Button = ({ children, handleSubmit }) => {
    return (
        <button onClick={handleSubmit} className={classes.Button}>
            {children}
        </button>
    );
};

export default Button;
