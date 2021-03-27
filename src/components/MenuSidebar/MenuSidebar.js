import React from "react";
import classes from "../MenuSidebar/MenuSidebar.module.scss";

import MenuHeader from "../MenuSidebar/components/MenuHeader/MenuHeader";
import UserInfo from "../MenuSidebar/components/UserInfo/UserInfo";
import MenuDetails from "../MenuSidebar/components/MenuDetails/MenuDetails";

const SideBar = () => {
    return (
        <div className={classes.Sidebar__container}>
            <MenuHeader />
            <div style={{ padding: "0 24px" }}>
                <UserInfo />
                <MenuDetails />
            </div>
        </div>
    );
};

export default SideBar;
