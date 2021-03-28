import React, { useState } from "react";
import classes from "./MealsHeader.module.scss";

import ActionButton from "../../../components/UI/ActionButton/ActionButton";
import Icons from "../../../components/UI/Icons/Icons";

const MealsHeader = () => {
    const cuisineLists = [
        { name: "all", text: "All cuisines" },
        { name: "italian", text: "Italian" },
        { name: "greek", text: "Greek" },
        { name: "thai", text: "Thai" },
        { name: "chinese", text: "Chinese" },
        { name: "indian", text: "Indian" },
        { name: "cajun", text: "Cajun" },
    ];

    const [cuisine, setCuisine] = useState("all");

    return (
        <div className={classes.Container}>
            <div className={classes.Header}>
                <div className={classes.Title}>
                    <h2>Today's options</h2>
                    <p>
                        Drag & drop meals to your list <Icons.Info />
                    </p>
                </div>
                <div className={classes.ActionButtons}>
                    <ActionButton>Compare meals</ActionButton>
                    <ActionButton>
                        Filter{" "}
                        <Icons.Sort
                            style={{ color: "#afb1ac", marginLeft: "2px" }}
                        />
                    </ActionButton>
                </div>
            </div>

            <div className={classes.SortList}>
                <ul>
                    {cuisineLists.map((item) => (
                        <li
                            key={item.name}
                            onClick={() => setCuisine(item.name)}
                        >
                            {item.text}
                            <div
                                className={`${classes.Underline} ${
                                    cuisine === item.name ? classes.Active : ""
                                }`}
                            />
                        </li>
                    ))}
                </ul>
                <div>
                    <p>
                        Sort by: <span>Price</span>
                        <Icons.SortDown
                            style={{ color: "#afb1ac", margin: "2px 3px" }}
                        />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MealsHeader;
