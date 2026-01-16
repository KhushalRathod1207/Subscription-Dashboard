import React, { useState } from "react";
import { FaBell, FaSearch, FaUser } from "react-icons/fa";

export default function Topbar() {
    const [search, setSearch] = useState("");
    const [notifications] = useState(3);

    return (
        <div className="admin-topbar d-flex align-items-center justify-content-between px-4 py-3 shadow-sm">
            <h4 className="m-0 fw-bold">Admin Dashboard</h4>

            {/* Search Bar */}
            <div className="topbar-search d-flex align-items-center">
                <FaSearch className="search-icon" />
                <input
                    type="text"
                    placeholder="Search data..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-input"
                />
            </div>

            {/* Icons */}
            <div className="topbar-icons d-flex align-items-center gap-3">
                <div className="notification-wrapper">
                    <FaBell size={20} className="icon" />
                    {notifications > 0 && <span className="badge">{notifications}</span>}
                </div>
                <FaUser size={20} className="icon" />
            </div>

            <style>{`
        .admin-topbar {
          background: #fff;
          border-bottom: 1px solid #e5e5e5;
          position: sticky;
          top: 0;
          z-index: 999;
        }

        .topbar-search {
          position: relative;
          flex: 1;
          max-width: 400px;
          margin: 0 20px;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #999;
        }

        .search-input {
          width: 100%;
          padding: 8px 12px 8px 35px;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          outline: none;
          transition: 0.3s;
        }

        .search-input:focus {
          border-color: #4f46e5;
        }

        .topbar-icons .icon {
          cursor: pointer;
          color: #555;
          transition: 0.2s;
        }

        .topbar-icons .icon:hover {
          color: #4f46e5;
        }

        .notification-wrapper {
          position: relative;
        }

        .notification-wrapper .badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background: #ef4444;
          color: #fff;
          font-size: 10px;
          padding: 2px 5px;
          border-radius: 10px;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .topbar-search {
            display: none;
          }
        }
      `}</style>
        </div>
    );
}
