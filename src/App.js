import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import SideBar from "./components/MenuSidebar/MenuSidebar";

import Overview from "./containers/Overview/Overview";
import Meals from "./containers/Meals/Meals";
import UserAccount from "./containers/UserAccount/UserAccount";
import OrderHistory from "./containers/OrderHistory/OrderHistory";
import Calendar from "./containers/Calendar/Calendar";
import Reviews from "./containers/Reviews/Reviews";
import Recipies from "./containers/Recipies/Recipies";

function App() {
    const routes = [
        { path: "/overview", name: "overview", component: Overview },
        { path: "/meals", name: "meals", component: Meals },
        { path: "/user", name: "userAccount", component: UserAccount },
        {
            path: "/order",
            name: "orderHistory",
            component: OrderHistory,
        },
        { path: "/calendar", name: "calendar", component: Calendar },
        { path: "/reviews", name: "reviews", component: Reviews },
        { path: "/recipies", name: "recipies", component: Recipies },
    ];
    return (
        <div style={{ height: "100vh", display: "flex" }}>
            <SideBar />
            <main style={{ width: "80%" }}>
                <Switch>
                    {routes.map((route) => (
                        <Route
                            exact
                            path={route.path}
                            key={route.name}
                            component={route.component}
                        />
                    ))}
                </Switch>
            </main>
        </div>
    );
}

export default App;
