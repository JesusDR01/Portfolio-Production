import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./helpers/i18n";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Route path="/" exact component={App} />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
