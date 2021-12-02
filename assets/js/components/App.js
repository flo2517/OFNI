import React, {Component, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Header from "./Header";
import Login from "./Login";
import AuthContext from "../contexts/authContext";
import authAPI from "../services/authAPI";

export default function App() {

    const [isAuthenticated, setIsAuthenticated] = useState(authAPI.isAuthenticated);
    return (
        <>
            <AuthContext.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated
            }}>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/login" exact element={<Login />} />
                        <Route path="/*" element={<NotFound/>} />
                    </Routes>
                </Router>
            </AuthContext.Provider>
        </>
    )
}