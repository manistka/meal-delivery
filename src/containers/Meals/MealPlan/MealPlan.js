import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import classes from "./MealPlan.module.scss";

import MealPlanItem from "./MealPlanItem/MealPlanItem";

import omlette from "../../../Images/omlette.jpg";
import yoghurt from "../../../Images/yoghurt.jpg";
import MealDrop from "../MealDrop/MealDrop";
import Payment from "./Payment/Payment";

const MealPlan = () => {
    const [date, setDate] = useState(new Date());
    const meals = [
        {
            type: "Breakfast",
            name: "Tomato Omelette",
            kcal: "489",
            price: "4,99",
            img: omlette,
        },
        {
            type: "Lunch",
            name: "Fruit Yoghurt",
            kcal: "223",
            price: "2,29",
            img: yoghurt,
        },
    ];
    return (
        <div className={classes.Container}>
            <div className={classes.Title}>
                <h2>Create your meal plan</h2>
                <DatePicker
                    selected={date}
                    onChange={(date) => setDate(date)}
                />
            </div>
            {meals.map((meal) => (
                <MealPlanItem
                    key={meal.name}
                    type={meal.type}
                    name={meal.name}
                    kcal={meal.kcal}
                    price={meal.price}
                    img={meal.img}
                />
            ))}
            <input type="range" min="100" max="450" style={{ width: "100%" }} />
            <MealDrop />
            <Payment />
        </div>
    );
};

export default MealPlan;
