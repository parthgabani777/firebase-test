import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase/init";
import { getUserData, login } from "./services/auth-services";
import { async } from "@firebase/util";

initializeApp(firebaseConfig);

const test = async () => {
    //await login("gabniparth78@gmail.com", "parth123");
    await getUserData();
};

test();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
