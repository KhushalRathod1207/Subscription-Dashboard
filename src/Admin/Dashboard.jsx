import React from "react";
import DashboardCards from "./DashboardCards";
import Charts from "./Charts";
import UsersTable from "./UsersTable";

export default function Dashboard() {
    return (
        <>
            <DashboardCards />
            <Charts />
            <UsersTable />
        </>
    );
}
