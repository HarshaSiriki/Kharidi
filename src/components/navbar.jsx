import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Login } from "../pages/login/Login";

export const Navbar = () => {
    return (
        <div className="navbar">

            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/cart"><ShoppingCart size={32}/></Link>
            </div>
        </div>
    );
};
