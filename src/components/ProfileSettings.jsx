import React, { useState } from "react";

const ProfileSettings = () => {
    // Dummy user data
    const [user, setUser] = useState({
        name: "Khushal Rathod",
        email: "khushal@example.com",
    });

    // Change Password Form (frontend only)
    const [passwords, setPasswords] = useState({
        current: "",
        new: "",
        confirm: "",
    });

    // Notification toggle
    const [notifications, setNotifications] = useState(true);

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswords({ ...passwords, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (passwords.new !== passwords.confirm) {
            alert("New passwords do not match!");
            return;
        }
        alert("Password change simulated successfully (UI only)!");
        setPasswords({ current: "", new: "", confirm: "" });
    };

    return (
        <div className="container my-5">
            <h2 className="text-center text-primary mb-4">User Profile & Settings</h2>

            <div className="row g-4">
                {/* Profile Card */}
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">👤 Profile Details</h5>
                            <p className="card-text mb-2">
                                <strong>Name:</strong> {user.name}
                            </p>
                            <p className="card-text mb-3">
                                <strong>Email:</strong> {user.email}
                            </p>
                            <button className="btn btn-primary">Edit Profile</button>
                        </div>
                    </div>
                </div>

                {/* Settings Section */}
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title mb-3">⚙️ Settings</h5>

                            {/* Change Password Form */}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Current Password</label>
                                    <input
                                        type="password"
                                        name="current"
                                        value={passwords.current}
                                        onChange={handlePasswordChange}
                                        className="form-control"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">New Password</label>
                                    <input
                                        type="password"
                                        name="new"
                                        value={passwords.new}
                                        onChange={handlePasswordChange}
                                        className="form-control"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Confirm New Password</label>
                                    <input
                                        type="password"
                                        name="confirm"
                                        value={passwords.confirm}
                                        onChange={handlePasswordChange}
                                        className="form-control"
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary w-100 mb-3">
                                    Change Password
                                </button>
                            </form>

                            {/* Notification Toggle */}
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <span>🔔 Notifications</span>
                                <button
                                    onClick={() => setNotifications(!notifications)}
                                    className={`btn ${notifications ? "btn-success" : "btn-secondary"
                                        }`}
                                >
                                    {notifications ? "ON" : "OFF"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSettings;
