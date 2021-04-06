import React, { useReducer, createContext, useContext } from "react";

const InitialState = {
    meals: [],
    totalPrice: 0.0,
};

export const MealContext = createContext();

const MealReducer = (state, action) => {
    switch (action.type) {
        case "add": {
            return {
                ...state,
                meals: action.payload.meals,
                totalPrice: action.payload.totalPrice,
            };
        }
        case "remove": {
            return {
                ...state,
                meals: action.payload.meals,
                totalPrice: action.payload.totalPrice,
            };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

export const MealProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MealReducer, InitialState);
    const value = { state, dispatch };

    return (
        <MealContext.Provider value={value}>{children}</MealContext.Provider>
    );
};

export const useMeal = () => {
    const context = useContext(MealContext);
    if (context === undefined) {
        throw new Error("useCount must be used within a CountProvider");
    }
    const { state, dispatch } = context;

    const addMealToOrder = (meal) => {
        const meals = [...state.meals];
        meals.push(meal);
        console.log(state.totalPrice);
        const totalPrice = state.totalPrice + meal.price;
        dispatch({ type: "add", payload: { meals, totalPrice } });
    };

    const removeMealFromOrder = (index) => {
        const meals = [...state.meals];
        const totalPrice = state.totalPrice - meals[index].price;
        meals.splice(index, 1);
        dispatch({ type: "remove", payload: { meals, totalPrice } });
    };

    return {
        state,
        addMealToOrder,
        removeMealFromOrder,
    };
};
