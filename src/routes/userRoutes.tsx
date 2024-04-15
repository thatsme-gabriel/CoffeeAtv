import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import Home from "../pages/home/home";
import Shop from "../pages/shop/shop";
import Info from "../pages/info/info";


const UserRoutes = () => {

    return (
        <Router>
            <Routes>
                <Route Component={Home} path="/" />
                <Route Component={Shop} path="/shop" />
                <Route Component={Info} path="info/" />
            </Routes>

        </Router>
    )
}

export default UserRoutes;