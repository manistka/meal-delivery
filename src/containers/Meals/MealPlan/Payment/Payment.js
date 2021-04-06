import React from "react";
import { useMeal } from "../../../../Context/MealContext";
import classes from "./Payment.module.scss";
import Icons from "../../../../components/UI/Icons/Icons";

const Payment = () => {
    const { state } = useMeal();

    return (
        <div className={classes.Container}>
            <div className={classes.Wrapper}>
                <div className={classes.Payment}>
                    <p>Save meals and pay</p>
                    <div className={classes.PaymentPrice}>
                        <p>
                            <span>$</span>
                            {state.totalPrice}
                        </p>
                    </div>
                </div>
                <div className={classes.PaymentMethod}>
                    <p>Add a payment method</p>
                </div>
            </div>
        </div>
    );
};

export default Payment;
