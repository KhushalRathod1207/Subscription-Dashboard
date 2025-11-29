import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AdminLayout() {
    return (
        <div className="admin-container d-flex">
            <Sidebar />

            <div className="admin-content flex-grow-1">
                <Topbar />

                <div className="p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
