import React, { useReducer, createContext, useContext } from "react";

const InitialState = {
    avatar: "https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.themes-lab.com%2Fconbis%2Fassets%2Fimages%2Favatars%2F&psig=AOvVaw0YPKjObsQhP2-CQ7rbxeB0&ust=1621251298501000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDxv_KNzvACFQAAAAAdAAAAABAD",
    name: "Maciej",
    surname: "Kosmos",
    email: "maciej.kosmos@test.pl",
    phone: "+48456874521",
    city: "Warsaw",
    post: "05-574",
    address: "Krajowa 1",
    country: "Poland",
};

export const UserContext = createContext();

const UserReducer = (state, action) => {
    switch (action.type) {
        case "save": {
            return {
                ...state,
                ...action.payload,
            };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, InitialState);
    const value = { state, dispatch };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useCount must be used within a CountProvider");
    }
    const { state, dispatch } = context;

    const saveUserData = (userData) => {
        dispatch({ type: "save", payload: userData });
    };

    return {
        state,
        saveUserData,
    };
};
