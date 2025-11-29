import React, { useState } from "react";
import "./Sidebar.css"; // optional styling file

export default function Sidebar() {
    const [active, setActive] = useState("Dashboard");

    const menu = [
        { name: "Dashboard", icon: "🏠" },
        { name: "Users", icon: "👥" },
        { name: "Orders", icon: "🧾" },
        { name: "Products", icon: "📦" },
        { name: "Settings", icon: "⚙️" },
        { name: "Logout", icon: "🚪" },
    ];

    return (
        <aside className="sidebar">
            <h2 className="logo">Admin Panel</h2>

            <ul className="menu-list">
                {menu.map((item) => (
                    <li
                        key={item.name}
                        className={`menu-item ${active === item.name ? "active" : ""}`}
                        onClick={() => setActive(item.name)}
                    >
                        <span className="icon">{item.icon}</span>
                        <span className="text">{item.name}</span>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
