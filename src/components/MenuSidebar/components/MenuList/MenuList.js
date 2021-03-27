import React from "react";
import classes from "./MenuList.module.scss";

import MenuButton from "../../../UI/MenuButton/MenuButton";
import Icons from "../../../UI/Icons/Icons";

const MenuList = () => {
    const links = [
        { name: "Overview", path: "overview", icon: <Icons.Overview /> },
        { name: "Meals", path: "meals", icon: <Icons.Meals /> },
        { name: "User", path: "user", icon: <Icons.User /> },
        { name: "Order", path: "order", icon: <Icons.Order /> },
        { name: "Calendar", path: "calendar", icon: <Icons.Calendar /> },
    ];
    return (
        <div className={classes.Menu__Style}>
            <h2>MENU</h2>
            {links.map((link) => (
                <MenuButton key={link.name} path={link.path}>
                    {link.icon}
                    {link.name}
                </MenuButton>
            ))}
        </div>
    );
};

export default MenuList;
