import React from "react";

import { MealProvider } from "./MealContext";

const AppProvider = ({ children }) => {
    return <MealProvider>{children}</MealProvider>;
};

export default AppProvider;
