import React from "react";
import classes from "../MenuHeader/MenuHeader.module.scss";
import Icons from "../../../UI/Icons/Icons";

const MenuHeader = () => {
    return (
        <div className={classes.Container}>
            <Icons.UserLock style={{ color: "#46b04a" }} />
            <Icons.Bell style={{ color: "#82867d" }} />
        </div>
    );
};

export default MenuHeader;
