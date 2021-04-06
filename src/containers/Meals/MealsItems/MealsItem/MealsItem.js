import React, { useContext, useEffect } from "react";
import { useMeal } from "../../../../Context/MealContext";

import classes from "./MealsItem.module.scss";
import Icons from "../../../../components/UI/Icons/Icons";

import dumplings from "../../../../Images/dumplings.png";
import IconsTag from "../../../../components/UI/IconsTag/IconsTag";

const MealsItem = ({ name, kcal, price, img, tags }) => {
    const { state, addMealToOrder } = useMeal();

    useEffect(() => {
        console.log("state", state);
    }, [state]);

    const getIcon = (tag) => {
        switch (tag) {
            case "meat":
                return (
                    <IconsTag bg="#ffdbdb">
                        <Icons.Meat color="#bf1609" />
                    </IconsTag>
                );
            case "vegan":
                return (
                    <IconsTag bg="#e1efb0">
                        <Icons.Vegan color="#fb924e" />
                    </IconsTag>
                );
            case "bread":
                return (
                    <IconsTag bg="#ffeedb">
                        <Icons.Bread color="#cda867" />
                    </IconsTag>
                );
            default:
                break;
        }
    };

    return (
        <div className={classes.Container}>
            <div className={classes.Wrapper}>
                <div className={classes.Images}>
                    <div>
                        <Icons.Dots
                            style={{
                                fontSize: "20px",
                                color: "#333b44",
                            }}
                        />
                        <Icons.Dots
                            style={{
                                fontSize: "20px",
                                color: "#333b44",
                            }}
                        />
                    </div>
                    <img src={img} alt="" className={classes.ImageDumplings} />
                </div>
                <div className={classes.Description}>
                    <h2>{name}</h2>
                    <p>{kcal} kcal per portion</p>
                    <div className={classes.DescriptionTags}>
                        {tags.map((tag) => (
                            <div key={tag}>{getIcon(tag)}</div>
                        ))}
                    </div>
                </div>
                <div className={classes.Price}>
                    <p>
                        <span>$</span>
                        {price}
                    </p>
                    <button
                        onClick={() =>
                            addMealToOrder({ name, kcal, price, img, tags })
                        }
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MealsItem;
