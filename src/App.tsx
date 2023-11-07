import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import ComponentOverview from "./sites/ComponentOverview/ComponentOverview";
import Home from "./sites/Home/Home";
import NotFound from "./sites/NotFound/NotFound";
import Us from "./sites/Us/Us";
import StudentLogin from "./sites/StudentLogin/StudentLogin";
import StudentRedirect from "./sites/StudentRedirect/StudentRedirect";
import StudentDashboardOverview from "./sites/StudentDashboard/StudentDashboardOverview/StudentDashboardOverview";

function App() {
    document.documentElement.setAttribute("data-theme", "light");
    document.title = "Über eduLounge";
    return (
        <Routes>
            <Route path={"*"} Component={NotFound}></Route>
            <Route path={"/"} Component={Home}></Route>
            <Route path={"/components"} Component={ComponentOverview}></Route>
            <Route path={"/about"} Component={Us}></Route>
            <Route path={"/students"} Component={StudentRedirect}></Route>
            <Route path={"/students/login"} Component={StudentLogin}></Route>
            <Route
                path={"/students/dashboard"}
                Component={StudentDashboardOverview}
            ></Route>
        </Routes>
    );
}

export default App;
