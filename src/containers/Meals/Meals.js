import React from "react";

import Header from "../../components/Header/Header";
import MealsHeader from "./MealsHeader/MealsHeader";

const Meals = () => {
    return (
        <div>
            <Header />
            <div style={{ width: "70%" }}>
                <MealsHeader />
            </div>
        </div>
    );
};

export default Meals;
