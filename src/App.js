import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import SideBar from "./components/MenuSidebar/MenuSidebar";

function App() {
    return (
        <div style={{ height: "100vh" }}>
            <SideBar />
        </div>
    );
}

export default App;
