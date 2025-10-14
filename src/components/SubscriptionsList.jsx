import React from "react";

const SubscriptionsList = () => {
    // Dummy Data
    const subscriptions = [
        { id: 1, name: "Netflix", price: 499, renewalDate: "2025-11-10", renewalCycle: "Monthly" },
        { id: 2, name: "Spotify Premium", price: 1199, renewalDate: "2025-12-01", renewalCycle: "Yearly" },
        { id: 3, name: "YouTube Premium", price: 139, renewalDate: "2025-10-20", renewalCycle: "Monthly" },
    ];

    return (
        <div className="container my-5">
            <h2 className="text-center text-primary mb-4">Active Subscriptions</h2>

            <div className="row g-4">
                {subscriptions.map((sub) => (
                    <div key={sub.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card shadow-sm h-100">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{sub.name}</h5>

                                <p className="card-text mb-1">
                                    💰 <strong>Price:</strong> ₹{sub.price}
                                </p>
                                <p className="card-text mb-1">
                                    📅 <strong>Renewal Date:</strong> {new Date(sub.renewalDate).toLocaleDateString("en-IN")}
                                </p>
                                <p className="card-text mb-3">
                                    🔁 <strong>Cycle:</strong> {sub.renewalCycle}
                                </p>

                                <div className="mt-auto d-flex gap-2">
                                    <button className="btn btn-primary flex-fill">Edit</button>
                                    <button className="btn btn-danger flex-fill">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SubscriptionsList;
