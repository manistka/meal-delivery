import React from "react";
import classes from "./MealsFilter.module.scss";
import ToggleSwitch from "../../UI/ToggleSwitch/ToggleSwitch";

const MealsFilter = () => {
    return (
        <div className={classes.Container}>
            <ToggleSwitch label="Meat" />
            <ToggleSwitch label="Vegan" />
            <ToggleSwitch label="Gluten Free" />
        </div>
    );
};

export default MealsFilter;
