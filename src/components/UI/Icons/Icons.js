import React from "react";
import classes from "./Icons.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

const Icons = ({ children }) => children;

const UserLock = () => (
    <FontAwesomeIcon
        className={classes.Locker__style}
        icon={["fas", "user-lock"]}
    />
);

const Bell = () => (
    <FontAwesomeIcon icon={["fas", "bell"]} className={classes.Bell__style} />
);

const Pencil = () => (
    <FontAwesomeIcon
        icon={["fas", "pencil-alt"]}
        className={classes.Pencil__style}
    />
);

const Overview = () => (
    <FontAwesomeIcon
        icon={["fas", "align-justify"]}
        className={classes.Icons}
    />
);
const Meals = () => (
    <FontAwesomeIcon icon={["fas", "hamburger"]} className={classes.Icons} />
);
const User = () => (
    <FontAwesomeIcon icon={["fas", "user"]} className={classes.Icons} />
);
const Order = () => (
    <FontAwesomeIcon icon={["fas", "book"]} className={classes.Icons} />
);
const Calendar = () => (
    <FontAwesomeIcon icon={["fas", "calendar-alt"]} className={classes.Icons} />
);
const Reviews = () => (
    <FontAwesomeIcon icon={["fas", "list"]} className={classes.Icons} />
);
const Recipies = () => (
    <FontAwesomeIcon icon={["fas", "book-reader"]} className={classes.Icons} />
);
const LogOut = () => (
    <FontAwesomeIcon icon={["fas", "sign-out-alt"]} className={classes.Icons} />
);

Icons.Bell = Bell;
Icons.UserLock = UserLock;
Icons.Pencil = Pencil;
Icons.Overview = Overview;
Icons.Meals = Meals;
Icons.User = User;
Icons.Order = Order;
Icons.Calendar = Calendar;
Icons.Reviews = Reviews;
Icons.Recipies = Recipies;
Icons.LogOut = LogOut;

export default Icons;
