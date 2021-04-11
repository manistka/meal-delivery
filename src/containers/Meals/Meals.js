import React, { useState } from "react";

import Header from "../../components/Header/Header";
import MealPlan from "./MealPlan/MealPlan";
import MealsHeader from "./MealsHeader/MealsHeader";
import MealsItems from "./MealsItems/MealsItems";

const Meals = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <Header />
            <div
                style={{
                    width: "100%",
                    height: "calc(100vh - 65px)",
                    display: "flex",
                }}
            >
                <div style={{ height: "100%", width: "70%" }}>
                    <MealsHeader />
                    <MealsItems date={date} />
                </div>
                <MealPlan date={date} setDate={setDate} />
            </div>
        </div>
    );
};

export default Meals;
