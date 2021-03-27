import React from "react";
import classes from "./CommunityList.module.scss";

import MenuButton from "../../../UI/MenuButton/MenuButton";
import Icons from "../../../UI/Icons/Icons";

const CommunityList = () => {
    const links = [
        { name: "Reviews", path: "reviews", icon: <Icons.Reviews /> },
        { name: "Recipies", path: "recipies", icon: <Icons.User /> },
    ];
    return (
        <div className={classes.Container}>
            <h2>COMMUNITY</h2>
            {links.map((link) => (
                <MenuButton key={link.name} path={link.path}>
                    {link.icon}
                    {link.name}
                </MenuButton>
            ))}
        </div>
    );
};

export default CommunityList;
