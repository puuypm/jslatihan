import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import Dashboard from "./Dashboard";
import Login from "./modules/Login";

const RoutesPath = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/counter" element={<Counter />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesPath;