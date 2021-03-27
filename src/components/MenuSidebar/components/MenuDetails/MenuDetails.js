import React from "react";
import classes from "./MenuDetails.module.scss";
import Icons from "../../../UI/Icons/Icons";
import MenuButton from "../../../UI/MenuButton/MenuButton";

import MenuList from "../MenuList/MenuList";
import CommunityList from "../CommunityList/CommunityList";

const MenuDetails = () => {
    return (
        <div className={classes.MenuDetails__Container}>
            <MenuList />
            <CommunityList />
            <div className={classes.LogOut__Style}>
                <MenuButton path="/logout">
                    <Icons.LogOut />
                    Log out
                </MenuButton>
            </div>
        </div>
    );
};

export default MenuDetails;
