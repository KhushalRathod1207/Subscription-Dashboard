import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = [
        { name: "Home", path: "/" },
        { name: "Active Subscriptions", path: "/subscriptions" },
        { name: "Upcoming Payments", path: "/upcoming" },
        { name: "Settings", path: "/settings" },
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
            <div className="container">
                {/* Logo */}
                <NavLink className="navbar-brand fw-bold text-primary" to="/">
                    MyDashboard
                </NavLink>

                {/* Hamburger button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {links.map((link) => (
                            <li className="nav-item" key={link.name}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? "active fw-bold text-primary" : ""}`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
