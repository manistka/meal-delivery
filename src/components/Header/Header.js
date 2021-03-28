import React from "react";
import classes from "./Header.module.scss";
import MealsFilter from "./MealsFilter/MealsFilter";

import SearchBar from "./SearchBar/SearchBar";

const Header = () => {
    return (
        <header className={classes.Header}>
            <SearchBar />
            <MealsFilter />
        </header>
    );
};

export default Header;
