import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Home"

export default function Routes() {
    return (
        <React.StrictMode>
            <Router>
                <Route exact path="/" component={Home} />
            </Router>
        </React.StrictMode>
    )
}