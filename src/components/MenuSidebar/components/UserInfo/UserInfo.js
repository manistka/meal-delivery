import React from "react";
import classes from "./UserInfo.module.scss";
import avatar from "../../../../Images/avatar.png";
import Icons from "../../../UI/Icons/Icons";
import Button from "../../../UI/Button/Button";

const UserInfo = () => {
    return (
        <div className={classes.UserInfo__container}>
            <img src={avatar} alt="" className={classes.awatar} />
            <h2 style={{ fontSize: "20px" }}>Hello Maciej</h2>
            <p style={{ color: "#82867d" }}>
                Your plan:{" "}
                <span
                    style={{
                        color: "#46b04a",
                        fontWeight: "bold",
                        cursor: "pointer",
                    }}
                >
                    Free
                </span>{" "}
                <Icons.Pencil />
            </p>
            <Button>
                <p>Create new meal</p>
                <p className={classes.Plus__button}>+</p>
            </Button>
        </div>
    );
};

export default UserInfo;