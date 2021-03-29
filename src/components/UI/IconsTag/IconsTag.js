import React from "react";
import classes from "./IconsTag.module.scss";

const IconsTag = ({ children, color, bg }) => {
    return (
        <div
            className={classes.IconsTagBackground}
            style={{ background: bg, color: color }}
        >
            {children}
        </div>
    );
};

export default IconsTag;
