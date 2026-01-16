import React, { useState } from "react";
import "./DashboardCards.css";

export default function DashboardCards() {
    const [products] = useState([
        { id: 1, name: "Laptop", stock: 15, purchasePrice: 45000 },
        { id: 2, name: "Mouse", stock: 50, purchasePrice: 500 },
        { id: 3, name: "Keyboard", stock: 8, purchasePrice: 1500 },
        { id: 4, name: "Monitor", stock: 12, purchasePrice: 12000 },
        { id: 5, name: "Headphones", stock: 5, purchasePrice: 2000 },
        { id: 6, name: "Webcam", stock: 20, purchasePrice: 3000 },
    ]);

    const totalProducts = products.length;
    const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
    const totalValue = products.reduce((sum, p) => sum + (p.stock * p.purchasePrice), 0);
    const lowStockCount = products.filter(p => p.stock < 10).length;

    const cards = [
        { title: "Total Products", value: totalProducts, icon: "📦" },
        { title: "Products in Stock", value: totalStock, icon: "📊" },
        { title: "Total Stock Value", value: `₹${totalValue.toLocaleString()}`, icon: "💰" },
        { title: "Low Stock Alerts", value: lowStockCount, icon: "⚠️" },
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
