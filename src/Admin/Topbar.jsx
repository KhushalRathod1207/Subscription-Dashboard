import React from "react";
import { FaBell, FaSearch, FaBars } from "react-icons/fa";

export default function Topbar() {
    return (
        <div className="admin-topbar d-flex align-items-center justify-content-between px-4 py-2 shadow-sm">

            {/* Mobile Toggle (Future use for sidebar collapse) */}
            <div className="topbar-left d-flex align-items-center gap-3">
                <FaBars className="topbar-icon d-lg-none" size={20} />
                <h4 className="m-0 fw-bold">Admin Panel</h4>
            </div>

            {/* Search */}
            <div className="topbar-search d-none d-md-flex align-items-center">
                <FaSearch className="me-2 text-muted" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="form-control border-0 shadow-none topbar-input"
                />
            </div>

            {/* Right Side icons */}
            <div className="topbar-right d-flex align-items-center gap-4">
                <FaBell size={20} className="topbar-icon" />

                <img
                    src="https://i.pravatar.cc/40"
                    alt="profile"
                    className="rounded-circle topbar-avatar"
                />
            </div>

            <style>{`
        .admin-topbar {
          background: #ffffff;
          border-bottom: 1px solid #eaeaea;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .topbar-search input {
          width: 250px;
          padding: 6px 10px;
          background: #f1f3f4;
          border-radius: 30px;
        }

        .topbar-input:focus {
          outline: none;
          background: #e5e7eb;
        }

        .topbar-icon {
          cursor: pointer;
          color: #555;
          transition: 0.2s;
        }

        .topbar-icon:hover {
          color: #000;
        }

        .topbar-avatar {
          width: 38px;
          height: 38px;
          border: 2px solid #ddd;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .topbar-search {
            display: none !important;
          }
        }
      `}</style>
        </div>
    );
}
