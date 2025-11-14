import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    FaHome,
    FaListUl,
    FaBell,
    FaCog,
    FaBars,
    FaTimes,
} from "react-icons/fa";
import "./Navbar.css";

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const links = [
        { name: "Home", path: "/", icon: <FaHome /> },
        { name: "Active Subscriptions", path: "/subscriptions", icon: <FaListUl /> },
        { name: "Upcoming Payments", path: "/upcoming", icon: <FaBell /> },
        { name: "Settings", path: "/settings", icon: <FaCog /> },
    ];

    return (
        <>
            {/* Mobile Hamburger Button */}
            <button
                className="sidebar-toggle d-lg-none"
                onClick={() => setOpen(true)}
            >
                <FaBars size={22} />
            </button>

            {/* Sidebar Background Overlay (Mobile) */}
            <div
                className={`sidebar-overlay ${open ? "show" : ""}`}
                onClick={() => setOpen(false)}
            ></div>

            {/* Sidebar */}
            <div className={`sidebar ${open ? "open" : ""}`}>
                {/* Close Button (Mobile) */}
                <button className="close-btn d-lg-none" onClick={() => setOpen(false)}>
                    <FaTimes size={22} />
                </button>

                <h3 className="sidebar-title">MyDashboard</h3>

                <ul className="sidebar-links">
                    {links.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.path}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `side-link ${isActive ? "active" : ""}`
                                }
                            >
                                <span className="icon">{link.icon}</span>
                                <span>{link.name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
