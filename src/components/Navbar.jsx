import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    FaHome,
    FaListUl,
    FaBell,
    FaCog,
    FaBars,
    FaTimes,
    FaShoppingCart,
    FaStore,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";
import "./Navbar.css";

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const { cartCount } = useCart();

    const links = [
        { name: "Home", path: "/", icon: <FaHome /> },
        { name: "Shop", path: "/shop", icon: <FaStore /> },
        { name: "Cart", path: "/cart", icon: <FaShoppingCart />, badge: cartCount },
        { name: "Active Subscriptions", path: "/subscriptions", icon: <FaListUl /> },
        { name: "Upcoming Payments", path: "/upcoming", icon: <FaBell /> },
        { name: "Settings", path: "/settings", icon: <FaCog /> },
    ];

    return (
        <>
            {/* Mobile Hamburger Button */}
            <button
                className="sidebar-toggle"
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
                <button className="close-btn" onClick={() => setOpen(false)}>
                    <FaTimes size={22} />
                </button>

                <h3 className="sidebar-title">🛒 ShopHub</h3>

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
                                {link.badge > 0 && (
                                    <span className="badge bg-danger ms-2">{link.badge}</span>
                                )}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
