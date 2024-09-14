import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./main";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Logout from "./components/Logout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <div className="flex justify-center items-center bg-gray-100">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/" element={<Main />} />
                </Routes>
            </div>
        </Router>
    </React.StrictMode>
);
