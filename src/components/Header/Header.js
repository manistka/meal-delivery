import React from "react";
import classes from "./Header.module.scss";
import MealsFilter from "./MealsFilter/MealsFilter";

import SearchBar from "./SearchBar/SearchBar";

const Header = ({ children }) => {
    return <header className={classes.Header}>{children}</header>;
};

export default Header;
