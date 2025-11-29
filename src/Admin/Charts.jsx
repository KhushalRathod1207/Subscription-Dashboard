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

// Register components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend
);

export default function ChartsSection() {
    // ---------------- BAR CHART ----------------
    const barData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Monthly Sales",
                data: [12000, 19000, 15000, 22000, 17000, 25000],
                backgroundColor: "rgba(54, 162, 235, 0.7)",
                borderRadius: 5,
            },
        ],
    };

    const barOptions = {
        responsive: true,
        maintainAspectRatio: false,
    };

    // ---------------- DONUT CHART ----------------
    const donutData = {
        labels: ["Electronics", "Clothing", "Groceries", "Accessories"],
        datasets: [
            {
                data: [40, 25, 20, 15],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.7)",
                    "rgba(54, 162, 235, 0.7)",
                    "rgba(255, 206, 86, 0.7)",
                    "rgba(75, 192, 192, 0.7)",
                ],
                borderWidth: 1,
            },
        ],
    };

    const donutOptions = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className="charts-wrapper">
            <h2 className="section-title">Analytics</h2>

            <div className="charts-container">
                {/* Bar Chart */}
                <div className="chart-card">
                    <h3>Monthly Sales</h3>
                    <div style={{ height: "300px" }}>
                        <Bar data={barData} options={barOptions} />
                    </div>
                </div>

                {/* Donut Chart */}
                <div className="chart-card">
                    <h3>Category Distribution</h3>
                    <div style={{ height: "300px" }}>
                        <Doughnut data={donutData} options={donutOptions} />
                    </div>
                </div>
            </div>

            {/* styles */}
            <style>{`
        .charts-wrapper {
          margin-top: 30px;
          width: 100%;
        }

        .section-title {
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 15px;
        }

        .charts-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .chart-card {
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }

        .chart-card h3 {
          margin-bottom: 15px;
          font-size: 18px;
          font-weight: 600;
        }

      `}</style>
        </div>
    );
}
