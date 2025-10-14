import { useState } from "react";

const AddSubscription = () => {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        renewalDate: "",
        renewalCycle: "Monthly",
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");

    // handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // form validation
    const validate = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.price) newErrors.price = "Price is required";
        else if (isNaN(formData.price)) newErrors.price = "Price must be a number";
        if (!formData.renewalDate) newErrors.renewalDate = "Renewal Date is required";
        if (!formData.renewalCycle) newErrors.renewalCycle = "Renewal Cycle is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess("");

        if (validate()) {
            console.log("✅ Subscription Added:", formData);
            setSuccess("Subscription added successfully!");
            setFormData({
                name: "",
                price: "",
                renewalDate: "",
                renewalCycle: "Monthly",
            });
        }
    };

    return (
        <div className="container my-5">
            <div className="card shadow mx-auto" style={{ maxWidth: "500px" }}>
                <div className="card-body">
                    <h3 className="card-title text-center text-primary mb-4">
                        Add New Subscription
                    </h3>

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
                                className={`form-select ${errors.renewalCycle ? "is-invalid" : ""}`}
                            >
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                            {errors.renewalCycle && <div className="invalid-feedback">{errors.renewalCycle}</div>}
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn btn-primary w-100">
                            Add Subscription
                        </button>

                        {/* Success Message */}
                        {success && (
                            <div className="alert alert-success text-center mt-3">{success}</div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddSubscription;
