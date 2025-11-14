import { useState, useEffect } from "react";
import "./ManageSubscriptions.css";

const ManageSubscriptions = () => {
    const [subscriptions, setSubscriptions] = useState([]);

    const [search, setSearch] = useState("");
    const [filterCycle, setFilterCycle] = useState("All");
    const [sortBy, setSortBy] = useState("");

    const [formData, setFormData] = useState({
        id: null,
        name: "",
        price: "",
        renewalDate: "",
        renewalCycle: "Monthly",
    });

    const [isEditing, setIsEditing] = useState(false);
    const [errors, setErrors] = useState({});
    const [selectedSub, setSelectedSub] = useState(null);

    // ⭐ Load from localStorage
    useEffect(() => {
        const savedSubs = localStorage.getItem("subscriptions");
        if (savedSubs) {
            setSubscriptions(JSON.parse(savedSubs));
        } else {
            setSubscriptions([
                { id: 1, name: "Netflix", price: 499, renewalDate: "2025-11-10", renewalCycle: "Monthly" },
                { id: 2, name: "Spotify Premium", price: 1199, renewalDate: "2025-12-01", renewalCycle: "Yearly" },
            ]);
        }
    }, []);

    // ⭐ Save to localStorage on change
    useEffect(() => {
        localStorage.setItem("subscriptions", JSON.stringify(subscriptions));
    }, [subscriptions]);

    // ⭐ Summary Data
    const totalSubs = subscriptions.length;
    const totalMonthly = subscriptions
        .filter((s) => s.renewalCycle === "Monthly")
        .reduce((sum, s) => sum + s.price, 0);

    const totalYearly = subscriptions
        .filter((s) => s.renewalCycle === "Yearly")
        .reduce((sum, s) => sum + s.price, 0);

    // Calculate progress bar %
    const getProgressPercent = (renewalDate) => {
        const renewal = new Date(renewalDate);
        const today = new Date();

        const oneDay = 1000 * 60 * 60 * 24;
        const diffDays = Math.ceil((renewal - today) / oneDay);

        if (diffDays <= 0) return 100;

        const cycle = 30;
        const passedDays = cycle - diffDays;
        const percent = (passedDays / cycle) * 100;

        return Math.min(Math.max(percent, 0), 100);
    };

    // Form handlers
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.price) newErrors.price = "Price is required";
        else if (isNaN(formData.price)) newErrors.price = "Price must be a number";
        if (!formData.renewalDate) newErrors.renewalDate = "Renewal date is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        if (isEditing) {
            setSubscriptions((prev) =>
                prev.map((sub) =>
                    sub.id === formData.id
                        ? { ...formData, price: Number(formData.price) }
                        : sub
                )
            );
            setIsEditing(false);
        } else {
            const newSub = { ...formData, id: Date.now(), price: Number(formData.price) };
            setSubscriptions([...subscriptions, newSub]);
        }

        setFormData({
            id: null,
            name: "",
            price: "",
            renewalDate: "",
            renewalCycle: "Monthly",
        });

        setErrors({});
    };

    const handleEdit = (sub) => {
        setFormData(sub);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this subscription?")) {
            setSubscriptions(subscriptions.filter((sub) => sub.id !== id));
        }
    };

    // ⭐ FILTER + SEARCH + SORT
    const filteredSubs = subscriptions
        .filter((sub) =>
            sub.name.toLowerCase().includes(search.toLowerCase())
        )
        .filter((sub) =>
            filterCycle === "All" ? true : sub.renewalCycle === filterCycle
        );

    const sortedSubs = [...filteredSubs].sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "date-new") return new Date(b.renewalDate) - new Date(a.renewalDate);
        if (sortBy === "date-old") return new Date(a.renewalDate) - new Date(b.renewalDate);
        return 0;
    });

    return (
        <div className="container my-5">
            <h2 className="text-center text-primary mb-4">Manage Subscriptions</h2>

            {/* ⭐ SUMMARY BAR */}
            <div className="summary-bar mb-4 p-3 rounded shadow-sm bg-light d-flex justify-content-between">
                <div><strong>Total Subscriptions:</strong> {totalSubs}</div>
                <div><strong>Monthly Total:</strong> ₹{totalMonthly}</div>
                <div><strong>Yearly Total:</strong> ₹{totalYearly}</div>
            </div>

            {/* ⭐ Search & Filters */}
            <div className="d-flex gap-3 mb-4 flex-wrap">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search subscription..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ maxWidth: "300px" }}
                />

                <select
                    className="form-select"
                    style={{ maxWidth: "200px" }}
                    value={filterCycle}
                    onChange={(e) => setFilterCycle(e.target.value)}
                >
                    <option value="All">All Cycles</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                </select>

                <select
                    className="form-select"
                    style={{ maxWidth: "200px" }}
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="">Sort By</option>
                    <option value="price-low">Price: Low → High</option>
                    <option value="price-high">Price: High → Low</option>
                    <option value="date-new">Renewal Date: Newest</option>
                    <option value="date-old">Renewal Date: Oldest</option>
                </select>
            </div>

            {/* Form */}
            <div className="card shadow mb-5 mx-auto" style={{ maxWidth: "500px" }}>
                <div className="card-body">
                    <h5 className="card-title mb-3">
                        {isEditing ? "Edit Subscription" : "Add Subscription"}
                    </h5>

                    {/* FORM CODE SAME AS BEFORE */}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                placeholder="Enter subscription name"
                            />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Price (₹)</label>
                            <input
                                type="text"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                className={`form-control ${errors.price ? "is-invalid" : ""}`}
                                placeholder="Enter price"
                            />
                            {errors.price && <div className="invalid-feedback">{errors.price}</div>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Renewal Date</label>
                            <input
                                type="date"
                                name="renewalDate"
                                value={formData.renewalDate}
                                onChange={handleChange}
                                className={`form-control ${errors.renewalDate ? "is-invalid" : ""}`}
                            />
                            {errors.renewalDate && (
                                <div className="invalid-feedback">{errors.renewalDate}</div>
                            )}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Renewal Cycle</label>
                            <select
                                name="renewalCycle"
                                value={formData.renewalCycle}
                                onChange={handleChange}
                                className="form-select"
                            >
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-primary w-100">
                            {isEditing ? "Update Subscription" : "Add Subscription"}
                        </button>
                    </form>
                </div>
            </div>

            {/* Subscription Cards */}
            <div className="row g-4">
                {sortedSubs.map((sub) => (
                    <div className="col-sm-6 col-lg-4" key={sub.id}>
                        <div
                            className="card h-100 shadow-sm subscription-card"
                            onClick={() => setSelectedSub(sub)}
                            style={{ cursor: "pointer" }}
                        >
                            <div className="card-body">
                                <h5 className="card-title">{sub.name}</h5>
                                <p><strong>Price:</strong> ₹{sub.price}</p>
                                <p><strong>Renewal:</strong> {new Date(sub.renewalDate).toLocaleDateString("en-IN")}</p>
                                <p><strong>Cycle:</strong> {sub.renewalCycle}</p>

                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar progress-bar-animated"
                                        style={{ width: `${getProgressPercent(sub.renewalDate)}%` }}
                                    >
                                        {Math.round(getProgressPercent(sub.renewalDate))}%
                                    </div>
                                </div>

                                <div className="d-flex gap-2">
                                    <button
                                        className="btn btn-warning flex-fill"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleEdit(sub);
                                        }}
                                    >
                                        ✏️ Edit
                                    </button>
                                    <button
                                        className="btn btn-danger flex-fill"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDelete(sub.id);
                                        }}
                                    >
                                        🗑️ Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedSub && (
                <>
                    <div className="modal-overlay" onClick={() => setSelectedSub(null)}></div>

                    <div className="popup-modal">
                        <h3 className="text-primary">{selectedSub.name}</h3>
                        <p><strong>Price:</strong> ₹{selectedSub.price}</p>
                        <p><strong>Renewal Date:</strong> {new Date(selectedSub.renewalDate).toLocaleDateString("en-IN")}</p>
                        <p><strong>Cycle:</strong> {selectedSub.renewalCycle}</p>

                        <button
                            className="btn btn-secondary mt-3"
                            onClick={() => setSelectedSub(null)}
                        >
                            Close
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ManageSubscriptions;
