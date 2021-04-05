import React from "react";
import classes from "./MealDrop.module.scss";

const MealDrop = () => {
    return (
        <div className={classes.Container}>
            <h3>Dinner</h3>
            <div className={classes.DropItem}>
                <p>Drop to add</p>
            </div>
        </div>
    );
};

export default MealDrop;
