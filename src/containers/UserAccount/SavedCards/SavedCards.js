import React from "react";
import Icons from "../../../components/UI/Icons/Icons";

import classes from "./SavedCards.module.scss";

const SavedCards = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div className={classes.SavedCardContainer}>
                <div className={classes.Title}>
                    <h3>Credit Card</h3>
                    <Icons.Credit style={{ color: "#2f385a" }} />
                </div>
                <div className={classes.Number}>
                    <p>****</p>
                    <p>****</p>
                    <p>****</p>
                    <p>4659</p>
                </div>
                <div className={classes.Subtitle}>
                    <div>
                        <h5>CARDHOLDER NAME</h5>
                        <h6>Maciej Kosmos</h6>
                    </div>
                    <div>
                        <h5>EXPIRY DATE</h5>
                        <h6>05/2021</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SavedCards;
