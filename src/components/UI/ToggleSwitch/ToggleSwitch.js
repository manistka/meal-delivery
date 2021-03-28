import React from "react";
import classes from "./ToggleSwitch.module.scss";

const ToggleSwitch = ({ label }) => {
    return (
        <div className={classes.Container}>
            <label className={classes.Switch}>
                <input type="checkbox" />
                <span className={classes.Slider}></span>
            </label>
            <p className={classes.Label}>{label}</p>
        </div>
    );
};

export default ToggleSwitch;
