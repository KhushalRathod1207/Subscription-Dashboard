import React from "react";

const UpcomingPayments = () => {
    // Dummy subscriptions (replace later with real data)
    const subscriptions = [
        { id: 1, name: "Netflix", price: 499, renewalDate: "2025-10-16", renewalCycle: "Monthly" },
        { id: 2, name: "Spotify Premium", price: 1199, renewalDate: "2025-11-05", renewalCycle: "Yearly" },
        { id: 3, name: "YouTube Premium", price: 139, renewalDate: "2025-10-20", renewalCycle: "Monthly" },
        { id: 4, name: "Prime Video", price: 1499, renewalDate: "2025-10-18", renewalCycle: "Yearly" },
    ];

    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);

    // Function → calculate days left
    const getDaysLeft = (date) => {
        const diffTime = new Date(date) - today;
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    };

    // Filter upcoming renewals (within 7 days)
    const upcomingRenewals = subscriptions
        .map(sub => ({
            ...sub,
            daysLeft: getDaysLeft(sub.renewalDate)
        }))
        .filter(sub => sub.daysLeft >= 0 && sub.daysLeft <= 7);

    // Badge color based on urgency
    const getBadgeClass = (days) => {
        if (days <= 2) return "badge bg-danger";     // urgent
        if (days <= 5) return "badge bg-warning";    // soon
        return "badge bg-info";                      // normal
    };

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
                            <div className="card h-100 shadow-sm border-0">
                                <div className="card-body d-flex flex-column">

                                    {/* Title + urgency badge */}
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="card-title m-0">{sub.name}</h5>
                                        <span className={getBadgeClass(sub.daysLeft)}>
                                            {sub.daysLeft} days left
                                        </span>
                                    </div>

                                    <p className="card-text mt-3 mb-1">
                                        💰 <strong>Price:</strong> ₹{sub.price}
                                    </p>

                                    <p className="card-text mb-1">
                                        📅 <strong>Renewal Date:</strong>{" "}
                                        {new Date(sub.renewalDate).toLocaleDateString("en-IN")}
                                    </p>

                                    <p className="card-text mb-3">
                                        🔁 <strong>Cycle:</strong> {sub.renewalCycle}
                                    </p>

                                    <button className="btn btn-warning mt-auto rounded-3">
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
