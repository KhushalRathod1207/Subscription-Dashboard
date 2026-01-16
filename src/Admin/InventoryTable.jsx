import React, { useState } from "react";
import "./InventoryTable.css";

export default function InventoryTable() {
    const [products, setProducts] = useState([
        { id: 1, name: "Laptop", stock: 15, purchasePrice: 45000, sellingPrice: 55000 },
        { id: 2, name: "Mouse", stock: 50, purchasePrice: 500, sellingPrice: 800 },
        { id: 3, name: "Keyboard", stock: 8, purchasePrice: 1500, sellingPrice: 2200 },
        { id: 4, name: "Monitor", stock: 12, purchasePrice: 12000, sellingPrice: 15000 },
        { id: 5, name: "Headphones", stock: 5, purchasePrice: 2000, sellingPrice: 3000 },
        { id: 6, name: "Webcam", stock: 20, purchasePrice: 3000, sellingPrice: 4500 },
    ]);

    const [search, setSearch] = useState("");
    const [filterLowStock, setFilterLowStock] = useState(false);
    const [editId, setEditId] = useState(null);
    const [editForm, setEditForm] = useState({});

    const handleDelete = (id) => {
        if (window.confirm("Delete this product?")) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    const handleEdit = (product) => {
        setEditId(product.id);
        setEditForm(product);
    };

    const handleSave = () => {
        setProducts(products.map(p => p.id === editId ? editForm : p));
        setEditId(null);
    };

    const filteredProducts = products
        .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
        .filter(p => !filterLowStock || p.stock < 10);

    return (
        <div className="inventory-wrapper">
            <h2 className="section-title">Inventory Management</h2>

            <div className="actions-row">
                <input
                    type="text"
                    placeholder="Search by product name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-input"
                />
                <label className="filter-label">
                    <input
                        type="checkbox"
                        checked={filterLowStock}
                        onChange={(e) => setFilterLowStock(e.target.checked)}
                    />
                    Low Stock Only
                </label>
            </div>

            <div className="table-container">
                <table className="inventory-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Stock Qty</th>
                            <th>Purchase Price</th>
                            <th>Selling Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((product) => (
                            <tr key={product.id}>
                                {editId === product.id ? (
                                    <>
                                        <td>{product.id}</td>
                                        <td>
                                            <input
                                                value={editForm.name}
                                                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                                                className="edit-input"
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                value={editForm.stock}
                                                onChange={(e) => setEditForm({ ...editForm, stock: Number(e.target.value) })}
                                                className="edit-input"
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                value={editForm.purchasePrice}
                                                onChange={(e) => setEditForm({ ...editForm, purchasePrice: Number(e.target.value) })}
                                                className="edit-input"
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                value={editForm.sellingPrice}
                                                onChange={(e) => setEditForm({ ...editForm, sellingPrice: Number(e.target.value) })}
                                                className="edit-input"
                                            />
                                        </td>
                                        <td>
                                            <button onClick={handleSave} className="save-btn">Save</button>
                                            <button onClick={() => setEditId(null)} className="cancel-btn">Cancel</button>
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td>#{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>
                                            <span className={product.stock < 10 ? "low-stock" : ""}>
                                                {product.stock}
                                            </span>
                                        </td>
                                        <td>₹{product.purchasePrice.toLocaleString()}</td>
                                        <td>₹{product.sellingPrice.toLocaleString()}</td>
                                        <td>
                                            <button onClick={() => handleEdit(product)} className="edit-btn">Edit</button>
                                            <button onClick={() => handleDelete(product.id)} className="delete-btn">Delete</button>
                                        </td>
                                    </>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
