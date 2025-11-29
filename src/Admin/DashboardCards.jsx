import React from "react";
import "./DashboardCards.css";

export default function DashboardCards() {
    const cards = [
        { title: "Total Users", value: "1,245", icon: "👥" },
        { title: "Total Orders", value: "580", icon: "🧾" },
        { title: "Total Sales", value: "₹2,40,000", icon: "💰" },
        { title: "Products in Stock", value: "320", icon: "📦" },
    ];

    return (
        <div className="cards-container">
            {cards.map((card) => (
                <div className="card-box" key={card.title}>
                    <div className="card-icon">{card.icon}</div>
                    <div className="card-info">
                        <h3>{card.title}</h3>
                        <p>{card.value}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
