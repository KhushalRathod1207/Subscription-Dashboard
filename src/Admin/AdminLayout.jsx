import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AdminLayout() {
    return (
        <div className="admin-container">
            <Sidebar />

            <div className="admin-content">
                <Topbar />

                <div className="content-wrapper">
                    <Outlet />
                </div>
            </div>

            <style>{`
                .admin-container {
                    display: flex;
                    min-height: 100vh;
                }

                .admin-content {
                    flex: 1;
                    margin-left: 240px;
                    transition: margin-left 0.3s ease;
                }

                .content-wrapper {
                    padding: 20px;
                }

                @media (max-width: 768px) {
                    .admin-content {
                        margin-left: 0;
                    }

                    .content-wrapper {
                        padding: 15px;
                    }
                }
            `}</style>
        </div>
    );
}
