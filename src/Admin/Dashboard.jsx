import React from "react";
import DashboardCards from "./DashboardCards";
import Charts from "./Charts";
import InventoryTable from "./InventoryTable";

export default function Dashboard() {
    return (
        <>
            <DashboardCards />
            <Charts />
            <InventoryTable />
        </>
    );
}
