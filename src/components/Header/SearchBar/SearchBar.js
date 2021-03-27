import classes from "./SearchBar.module.scss";
import React from "react";

import Icons from "../../UI/Icons/Icons";

const SearchBar = () => {
    return (
        <div className={classes.Container}>
            <Icons.Search style={{ color: "#82867d" }} />
            <input placeholder="Wyszukaj..." className={classes.Input} />
        </div>
    );
};

export default SearchBar;
