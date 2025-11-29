import React, { useState } from "react";
import "./UsersTable.css";

export default function UsersTable() {
    // Dummy Data
    const initialUsers = [
        { id: 1, name: "Khushal Rathod", email: "khushal@example.com", role: "Admin", status: "Active" },
        { id: 2, name: "Jay Patel", email: "jay@example.com", role: "User", status: "Blocked" },
        { id: 3, name: "Aarav Shah", email: "aarav@example.com", role: "User", status: "Active" },
        { id: 4, name: "Mihir Singh", email: "mihir@example.com", role: "Moderator", status: "Active" },
        { id: 5, name: "Priya Gupta", email: "priya@example.com", role: "User", status: "Blocked" },
    ];

    const [users, setUsers] = useState(initialUsers);
    const [search, setSearch] = useState("");
    const [filterStatus, setFilterStatus] = useState("All");

    // Search + Filter Logic
    const filteredUsers = users.filter((user) => {
        const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = filterStatus === "All" || user.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    // Delete User
    const handleDelete = (id) => {
        setUsers(users.filter((u) => u.id !== id));
    };

    return (
        <div className="users-table-wrapper">
            <h2 className="section-title">Users Management</h2>

            {/* Search + Filter Row */}
            <div className="actions-row">
                <input
                    type="text"
                    placeholder="Search by name..."
                    className="search-input"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    className="filter-dropdown"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                >
                    <option value="All">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Blocked">Blocked</option>
                </select>

                <button className="add-btn">+ Add User</button>
            </div>

            {/* Table */}
            <div className="table-container">
                <table className="users-table">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map((user) => (
                                <tr key={user.id}>
                                    <td>#{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <span
                                            className={`status-badge ${user.status === "Active" ? "active" : "blocked"
                                                }`}
                                        >
                                            {user.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button className="edit-btn">Edit</button>
                                        <button
                                            className="delete-btn"
                                            onClick={() => handleDelete(user.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="no-data">
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
