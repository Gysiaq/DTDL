import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import TodoContext from "./context/TodoContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
);
