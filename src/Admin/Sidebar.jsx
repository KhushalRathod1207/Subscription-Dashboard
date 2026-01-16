import React, { useState } from "react";
import "./Sidebar.css";

export default function Sidebar() {
    const [active, setActive] = useState("Dashboard");
    const [isOpen, setIsOpen] = useState(false);

    const menu = [
        { name: "Dashboard", icon: "🏠" },
        { name: "Inventory", icon: "📦" },
        { name: "Transactions", icon: "💳" },
        { name: "Reports", icon: "📊" },
        { name: "Settings", icon: "⚙️" },
        { name: "Logout", icon: "🚪" },
    ];

    return (
        <>
            <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "✕" : "☰"}
            </button>

            {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}

            <aside className={`sidebar ${isOpen ? "open" : ""}`}>
                <h2 className="logo">Admin Panel</h2>

                <ul className="menu-list">
                    {menu.map((item) => (
                        <li
                            key={item.name}
                            className={`menu-item ${active === item.name ? "active" : ""}`}
                            onClick={() => {
                                setActive(item.name);
                                setIsOpen(false);
                            }}
                        >
                            <span className="icon">{item.icon}</span>
                            <span className="text">{item.name}</span>
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    );
}
