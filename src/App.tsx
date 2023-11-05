import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import ComponentOverview from "./sites/ComponentOverview";
import Home from "./sites/Home";
import NotFound from "./sites/NotFound";
import Us from "./sites/Us";

function App() {
    document.documentElement.setAttribute("data-theme", "light");
    document.title = "Über eduLounge";
    return (
        <Routes>
            <Route path={"*"} Component={NotFound}></Route>
            <Route path={"/"} Component={Home}></Route>
            <Route path={"/components"} Component={ComponentOverview}></Route>
            <Route path={"/about"} Component={Us}></Route>
        </Routes>
    );
}

export default App;
