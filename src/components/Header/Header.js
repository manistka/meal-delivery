import React from "react";
import classes from "./Header.module.scss";

import SearchBar from "./SearchBar/SearchBar";

const Header = () => {
    return (
        <header className={classes.Header}>
            <SearchBar />
            {/* <MealsFilter /> */}
        </header>
    );
};

export default Header;
