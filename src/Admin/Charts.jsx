import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

export default function Charts() {
    const barData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Sales",
                data: [45000, 52000, 48000, 61000, 55000, 67000],
                backgroundColor: "rgba(79, 70, 229, 0.8)",
            },
            {
                label: "Purchase",
                data: [30000, 35000, 32000, 40000, 38000, 45000],
                backgroundColor: "rgba(239, 68, 68, 0.8)",
            },
        ],
    };

    const donutData = {
        labels: ["Electronics", "Accessories", "Peripherals", "Components"],
        datasets: [
            {
                data: [40, 25, 20, 15],
                backgroundColor: [
                    "rgba(79, 70, 229, 0.8)",
                    "rgba(34, 197, 94, 0.8)",
                    "rgba(251, 191, 36, 0.8)",
                    "rgba(239, 68, 68, 0.8)",
                ],
            },
        ],
    };

    return (
        <div className="charts-wrapper">
            <h2 className="section-title">Analytics</h2>
            <div className="charts-container">
                <div className="chart-card">
                    <h3>Monthly Sales vs Purchase</h3>
                    <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
                </div>
                <div className="chart-card">
                    <h3>Stock Distribution by Category</h3>
                    <Doughnut data={donutData} options={{ responsive: true, maintainAspectRatio: false }} />
                </div>
            </div>

            <style>{`
                .charts-wrapper {
                    margin-top: 30px;
                }
                .section-title {
                    font-size: 22px;
                    font-weight: 600;
                    margin-bottom: 20px;
                }
                .charts-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 20px;
                }
                .chart-card {
                    background: #fff;
                    padding: 20px;
                    border-radius: 12px;
                    border: 1px solid #e5e5e5;
                    height: 350px;
                }
                .chart-card h3 {
                    margin-bottom: 15px;
                    font-size: 18px;
                    font-weight: 600;
                }

                @media (max-width: 768px) {
                    .charts-container {
                        grid-template-columns: 1fr;
                    }
                    .chart-card {
                        height: 300px;
                        padding: 15px;
                    }
                    .section-title {
                        font-size: 18px;
                    }
                }
            `}</style>
        </div>
    );
}
