import React from "react";

const UpcomingPayments = () => {
    // Dummy subscriptions
    const subscriptions = [
        { id: 1, name: "Netflix", price: 499, renewalDate: "2025-10-16", renewalCycle: "Monthly" },
        { id: 2, name: "Spotify Premium", price: 1199, renewalDate: "2025-11-05", renewalCycle: "Yearly" },
        { id: 3, name: "YouTube Premium", price: 139, renewalDate: "2025-10-20", renewalCycle: "Monthly" },
        { id: 4, name: "Prime Video", price: 1499, renewalDate: "2025-10-18", renewalCycle: "Yearly" },
    ];

    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);

    const upcomingRenewals = subscriptions.filter((sub) => {
        const renewal = new Date(sub.renewalDate);
        return renewal >= today && renewal <= nextWeek;
    });

    return (
        <div className="container my-5">
            <h2 className="text-center text-primary mb-4">
                Upcoming Payments (Next 7 Days)
            </h2>

            {upcomingRenewals.length === 0 ? (
                <p className="text-center text-secondary fs-5">
                    🎉 No upcoming renewals within the next 7 days.
                </p>
            ) : (
                <div className="row g-4">
                    {upcomingRenewals.map((sub) => (
                        <div key={sub.id} className="col-12 col-sm-6 col-md-4">
                            <div className="card h-100 shadow-sm">
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

                                    <button className="btn btn-warning mt-auto">
                                        Pay Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default UpcomingPayments;
