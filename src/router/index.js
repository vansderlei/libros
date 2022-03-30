import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../pages/home"
import selectedBook from "../pages/selectedBook"

export default function Routes() {
    return (
        <React.StrictMode>
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/book" component={selectedBook} />
            </Router>
        </React.StrictMode>
    )
}