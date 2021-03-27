import React from "react";
import classes from "../MenuHeader/MenuHeader.module.scss";
import Icons from "../../../UI/Icons/Icons";

const MenuHeader = () => {
    return (
        <div className={classes.MenuHeader__container}>
            <Icons.UserLock />
            <Icons.Bell />
        </div>
    );
};

export default MenuHeader;
