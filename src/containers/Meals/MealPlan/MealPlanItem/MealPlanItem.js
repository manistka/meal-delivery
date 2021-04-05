import React from "react";
import classes from "./MealPlanItem.module.scss";

import omlette from "../../../../Images/omlette.jpg";

const MealPlanItem = ({ type, name, kcal, price, img }) => {
    return (
        <div className={classes.Container}>
            <h3>{type}</h3>{" "}
            <div className={classes.FoodWrapper}>
                <div className={classes.FoodDescription}>
                    <img src={img} alt="" />
                    <div style={{ marginRight: "auto", width: "65%" }}>
                        <p
                            style={{
                                margin: "0",
                                fontSize: "16px",
                                fontWeight: "500",
                            }}
                        >
                            {name}
                        </p>
                        <p
                            style={{
                                margin: "0",
                                fontSize: "14px",
                                color: "#82867d",
                            }}
                        >
                            {kcal} kcal
                        </p>
                    </div>
                </div>

                <div className={classes.FoodPrice}>
                    <p style={{ margin: "0", fontWeight: "700" }}>
                        <span style={{ color: "#82867d", fontWeight: "100" }}>
                            $
                        </span>
                        {price}
                    </p>
                    <p
                        style={{
                            margin: "0",
                            color: "#82867d",
                            cursor: "pointer",
                        }}
                    >
                        x
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MealPlanItem;
