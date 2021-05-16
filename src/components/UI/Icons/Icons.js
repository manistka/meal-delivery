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

const Dots = (props) => (
    <FontAwesomeIcon icon={["fas", "ellipsis-v"]} {...props} />
);

const Meat = (props) => (
    <FontAwesomeIcon icon={["fas", "drumstick-bite"]} {...props} />
);

const Vegan = (props) => (
    <FontAwesomeIcon icon={["fas", "seedling"]} {...props} />
);

const Bread = (props) => (
    <FontAwesomeIcon icon={["fas", "bread-slice"]} {...props} />
);

const Credit = (props) => (
    <FontAwesomeIcon icon={["fas", "credit-card"]} {...props} />
);

const Add = (props) => (
    <FontAwesomeIcon icon={["fas", "plus-square"]} {...props} />
);

const Delete = (props) => (
    <FontAwesomeIcon icon={["fas", "trash"]} {...props} />
);

const Check = (props) => (
    <FontAwesomeIcon icon={["fas", "clipboard-check"]} {...props} />
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
Icons.Dots = Dots;
Icons.Meat = Meat;
Icons.Vegan = Vegan;
Icons.Bread = Bread;
Icons.Credit = Credit;
Icons.Add = Add;
Icons.Delete = Delete;
Icons.Check = Check;

export default Icons;
