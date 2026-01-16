import React, { useState, useEffect } from "react";

export default function ModalAddUser({ show, onClose, onSave, editData }) {
    const [user, setUser] = useState({ name: "", email: "", role: "", status: "Active" });

    useEffect(() => {
        if (editData) setUser(editData);
    }, [editData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSave = () => {
        onSave(user);
        onClose();
    };

    if (!show) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>{editData ? "Edit User" : "Add User"}</h3>

                <input type="text" name="name" placeholder="Name" value={user.name} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} />
                <input type="text" name="role" placeholder="Role" value={user.role} onChange={handleChange} />

                <select name="status" value={user.status} onChange={handleChange}>
                    <option value="Active">Active</option>
                    <option value="Blocked">Blocked</option>
                </select>

                <div className="modal-buttons">
                    <button className="btn-close" onClick={onClose}>Close</button>
                    <button className="btn-save" onClick={handleSave}>Save</button>
                </div>

            </div>

            <style>{`
        .modal-overlay {
          position: fixed;
          top:0; left:0;
          width:100%; height:100%;
          background: rgba(0,0,0,0.5);
          display:flex; justify-content:center; align-items:center;
          z-index:1000;
        }
        .modal-content {
          background:white; padding:20px; border-radius:10px; width:300px;
          display:flex; flex-direction:column; gap:10px;
        }
        .modal-content input, .modal-content select {
          padding:8px; border-radius:6px; border:1px solid #ccc;
        }
        .modal-buttons { display:flex; justify-content:flex-end; gap:10px; margin-top:10px; }
        .btn-close { background:#ccc; border:none; padding:8px 12px; border-radius:6px; cursor:pointer; }
        .btn-save { background:#4a6cf7; color:white; border:none; padding:8px 12px; border-radius:6px; cursor:pointer; }
      `}</style>
        </div>
    );
}
