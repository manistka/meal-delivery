import React from "react";

import { MealProvider } from "./MealContext";
import { UserProvider } from "./UserContext";

const AppProvider = ({ children }) => {
    return (
        <UserProvider>
            <MealProvider>{children}</MealProvider>
        </UserProvider>
    );
};

export default AppProvider;
