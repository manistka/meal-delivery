import classes from "./ActionButton.module.scss";
import React from "react";

const ActionButton = ({ children }) => {
    return <button className={classes.ActionButton}>{children}</button>;
};

export default ActionButton;
