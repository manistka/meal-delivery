import React from "react";
import classes from "./UserAccount.module.scss";

import Header from "../../components/Header/Header";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import SavedCards from "./SavedCards/SavedCards";
import Icons from "../../components/UI/Icons/Icons";
// import NewPayment from "./NewPayment/NewPayment";

const UserAccount = () => {
    const info = {
        name: "Name",
        surname: "Surname",
        city: "City",
        post: "Post Code",
        address: "Address",
        country: "Country",
        email: "Email",
        phone: "Phone Number",
    };

    return (
        <div className={classes.Container}>
            <Header />
            <div className={classes.DetailsContainer}>
                <div style={{ display: "flex", height: "80%" }}>
                    <div className={classes.PersonWrapper}>
                        <h2>Personal information</h2>
                        <div className={classes.PersonLength}>
                            <div className={classes.AwatarWrapper}>
                                <div className={classes.awatar}>
                                    <p>Change avatar</p>
                                </div>
                                <div className={classes.InputsAwatarWrapper}>
                                    <Input
                                        classes={classes.Input}
                                        label={info.name}
                                    />
                                    <Input
                                        classes={classes.Input}
                                        label={info.surname}
                                    />
                                </div>
                            </div>
                            <div className={classes.InputsWrapper}>
                                <Input
                                    classes={classes.Input}
                                    label={info.email}
                                />
                                <Input
                                    classes={classes.Input}
                                    label={info.phone}
                                />
                                <div className={classes.HalfWrapper}>
                                    <Input
                                        classes={`${classes.Input} ${classes.Input2}`}
                                        label={info.city}
                                    />
                                    <Input
                                        classes={`${classes.Input} ${classes.Input2}`}
                                        label={info.post}
                                    />
                                </div>
                                <div className={classes.HalfWrapper}>
                                    <Input
                                        classes={`${classes.Input} ${classes.Input2}`}
                                        label={info.address}
                                    />
                                    <Input
                                        classes={`${classes.Input} ${classes.Input2}`}
                                        label={info.country}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={classes.SaveButton}>
                            <Button>Save info</Button>
                        </div>
                    </div>
                    <div className={classes.PaymentWrapper}>
                        <h2>Saved cards</h2>
                        <div style={{ width: "100%", height: "65%" }}>
                            <SavedCards />
                            <SavedCards />
                        </div>
                        <div className={classes.CardsButton}>
                            <Button>
                                <Icons.Add />
                            </Button>
                            <Button>
                                <Icons.Delete />
                            </Button>
                            <Button>
                                <Icons.Check />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAccount;
