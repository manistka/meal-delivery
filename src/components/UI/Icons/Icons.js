import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

const Icons = ({ children }) => children;

const UserLock = (props) => (
    <FontAwesomeIcon icon={["fas", "user-lock"]} {...props} />
);

const Bell = (props) => <FontAwesomeIcon icon={["fas", "bell"]} {...props} />;

const Pencil = (props) => (
    <FontAwesomeIcon icon={["fas", "pencil-alt"]} {...props} />
);

const Overview = (props) => (
    <FontAwesomeIcon icon={["fas", "align-justify"]} {...props} />
);

const Meals = (props) => (
    <FontAwesomeIcon icon={["fas", "hamburger"]} {...props} />
);

const User = (props) => <FontAwesomeIcon icon={["fas", "user"]} {...props} />;

const Order = (props) => <FontAwesomeIcon icon={["fas", "book"]} {...props} />;

const Calendar = (props) => (
    <FontAwesomeIcon icon={["fas", "calendar-alt"]} {...props} />
);

const Reviews = (props) => (
    <FontAwesomeIcon icon={["fas", "list"]} {...props} />
);

const Recipies = (props) => (
    <FontAwesomeIcon icon={["fas", "book-reader"]} {...props} />
);

const LogOut = (props) => (
    <FontAwesomeIcon icon={["fas", "sign-out-alt"]} {...props} />
);

const Search = (props) => (
    <FontAwesomeIcon icon={["fas", "search"]} {...props} />
);

const Sort = (props) => <FontAwesomeIcon icon={["fas", "sort"]} {...props} />;

const Info = (props) => (
    <FontAwesomeIcon icon={["fas", "info-circle"]} {...props} />
);

const SortDown = (props) => (
    <FontAwesomeIcon icon={["fas", "sort-down"]} {...props} />
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
Icons.Search = Search;
Icons.Sort = Sort;
Icons.Info = Info;
Icons.SortDown = SortDown;

export default Icons;
