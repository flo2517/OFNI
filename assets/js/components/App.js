import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";


export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/*" element={<NotFound/>} />
            </Routes>
        </Router>
    )
}