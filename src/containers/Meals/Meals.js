import React from "react";

import Header from "../../components/Header/Header";
import MealsHeader from "./MealsHeader/MealsHeader";
import MealsItems from "./MealsItems/MealsItems";

const Meals = () => {
    return (
        <div>
            <Header />
            <div style={{ width: "70%", height: "calc(100vh - 65px)" }}>
                <MealsHeader />
                <MealsItems />
            </div>
        </div>
    );
};

export default Meals;
