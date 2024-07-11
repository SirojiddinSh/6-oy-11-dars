import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./locales/i18next.js";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
