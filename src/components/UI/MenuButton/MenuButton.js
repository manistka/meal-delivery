import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MenuButton.module.scss";

const MenuButton = ({ path, children }) => {
    return (
        <NavLink
            to={path}
            activeClassName={classes.Selected}
            className={classes.MenuButton}
        >
            {children}
        </NavLink>
    );
};

export default MenuButton;
