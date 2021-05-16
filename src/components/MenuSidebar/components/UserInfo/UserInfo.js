import React from "react";
import classes from "./UserInfo.module.scss";
import avatar from "../../../../Images/avatar.png";
import Icons from "../../../UI/Icons/Icons";
import Button from "../../../UI/Button/Button";
import { useUser } from "../../../../Context/UserContext";

const UserInfo = () => {
    const { state } = useUser();
    return (
        <div className={classes.Container}>
            <img src={avatar} alt="" className={classes.awatar} />
            <h2 style={{ fontSize: "20px", color: "#000" }}>
                Hello {state.name}
            </h2>
            <p style={{ color: "#82867d", marginTop: "0" }}>
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
                <Icons.Pencil style={{ color: "#82867d" }} />
            </p>
            <Button>
                <p>Create new meal</p>
                <p className={classes.Plus__button}>+</p>
            </Button>
        </div>
    );
};

export default UserInfo;
