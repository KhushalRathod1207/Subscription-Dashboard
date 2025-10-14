import { useState } from "react";

const ManageSubscriptions = () => {
    // Dummy initial data
    const [subscriptions, setSubscriptions] = useState([
        { id: 1, name: "Netflix", price: 499, renewalDate: "2025-11-10", renewalCycle: "Monthly" },
        { id: 2, name: "Spotify Premium", price: 1199, renewalDate: "2025-12-01", renewalCycle: "Yearly" },
    ]);

    const [formData, setFormData] = useState({
        id: null,
        name: "",
        price: "",
        renewalDate: "",
        renewalCycle: "Monthly",
    });

    const [isEditing, setIsEditing] = useState(false);
    const [errors, setErrors] = useState({});

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Validation
    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.price) newErrors.price = "Price is required";
        else if (isNaN(formData.price)) newErrors.price = "Price must be a number";
        if (!formData.renewalDate) newErrors.renewalDate = "Renewal date is required";
        return newErrors;
    };

    // Submit
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
                    sub.id === formData.id ? { ...formData, price: Number(formData.price) } : sub
                )
            );
            setIsEditing(false);
        } else {
            const newSub = { ...formData, id: Date.now(), price: Number(formData.price) };
            setSubscriptions([...subscriptions, newSub]);
        }

        setFormData({ id: null, name: "", price: "", renewalDate: "", renewalCycle: "Monthly" });
        setErrors({});
    };

    // Edit
    const handleEdit = (sub) => {
        setFormData(sub);
        setIsEditing(true);
    };

    // Delete
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this subscription?")) {
            setSubscriptions(subscriptions.filter((sub) => sub.id !== id));
        }
    };

    return (
        <div className="container my-5">
            <h2 className="text-center text-primary mb-4">Manage Subscriptions</h2>

            {/* Form */}
            <div className="card shadow mb-5 mx-auto" style={{ maxWidth: "500px" }}>
                <div className="card-body">
                    <h5 className="card-title mb-3">{isEditing ? "Edit Subscription" : "Add Subscription"}</h5>

                    <form onSubmit={handleSubmit}>
                        {/* Name */}
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

                        {/* Price */}
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

                        {/* Renewal Date */}
                        <div className="mb-3">
                            <label className="form-label">Renewal Date</label>
                            <input
                                type="date"
                                name="renewalDate"
                                value={formData.renewalDate}
                                onChange={handleChange}
                                className={`form-control ${errors.renewalDate ? "is-invalid" : ""}`}
                            />
                            {errors.renewalDate && <div className="invalid-feedback">{errors.renewalDate}</div>}
                        </div>

                        {/* Renewal Cycle */}
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
                {subscriptions.map((sub) => (
                    <div className="col-sm-6 col-lg-4" key={sub.id}>
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">{sub.name}</h5>
                                <p className="card-text mb-1">
                                    💰 <strong>Price:</strong> ₹{sub.price}
                                </p>
                                <p className="card-text mb-1">
                                    📅 <strong>Renewal Date:</strong>{" "}
                                    {new Date(sub.renewalDate).toLocaleDateString("en-IN")}
                                </p>
                                <p className="card-text mb-2">
                                    🔁 <strong>Cycle:</strong> {sub.renewalCycle}
                                </p>
                                <div className="d-flex gap-2">
                                    <button className="btn btn-warning flex-fill" onClick={() => handleEdit(sub)}>
                                        ✏️ Edit
                                    </button>
                                    <button className="btn btn-danger flex-fill" onClick={() => handleDelete(sub.id)}>
                                        🗑️ Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageSubscriptions;
