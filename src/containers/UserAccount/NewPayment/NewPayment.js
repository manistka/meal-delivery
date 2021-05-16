import React from "react";

import Input from "../../../components/UI/Input/Input";
import classes from "./NewPayment.module.scss";

const NewPayment = () => {
    const details = {
        holder: "Cardholder Name",
        card: "Card Number",
        date: "Expiry Date",
        CVC: "CVC",
    };
    return (
        <div className={classes.PaymentLength}>
            <div>
                <h2>New payment</h2>
            </div>
            <Input
                classes={`${classes.Input} ${classes.Input3}`}
                label={details.holder}
            />
            <Input
                classes={`${classes.Input} ${classes.Input3}`}
                label={details.card}
            />
            <div className={classes.HalfWrapper}>
                <Input
                    classes={`${classes.Input} ${classes.Input2}`}
                    label={details.date}
                />
                <Input
                    classes={`${classes.Input} ${classes.Input2}`}
                    label={details.CVC}
                />
            </div>
        </div>
    );
};

export default NewPayment;
