import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddSubscription from "./components/AddSubscription";
import SubscriptionsList from "./components/SubscriptionsList";
import ManageSubscriptions from "./components/ManageSubscriptions";
import UpcomingPayments from "./components/UpcomingPayments";
import ProfileSettings from "./components/ProfileSettings";

// ADMIN IMPORTS
import AdminLayout from "./Admin/AdminLayout";
import Dashboard from "./Admin/Dashboard";

const Home = () => {
  return (
    <div className="container py-5">
      <h1 className="text-primary text-center mb-3">
        Welcome to My Subscription Dashboard
      </h1>

      <p className="text-center lead">
        Hi! I'm <strong>Khushal Rathod</strong>, and this is my Internship Project for DG INTERN HUB.
      </p>

      <div className="text-center text-muted mt-4">
        Designed & Developed by <strong>Khushal Rathod</strong>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Navbar />

      <div className="container my-4">
        <Routes>
          {/* User Dashboard */}
          <Route path="/" element={<Home />} />
          <Route path="/subscriptions" element={<ManageSubscriptions />} />
          <Route path="/add-subscription" element={<AddSubscription />} />
          <Route path="/subscriptions-list" element={<SubscriptionsList />} />
          <Route path="/upcoming" element={<UpcomingPayments />} />
          <Route path="/settings" element={<ProfileSettings />} />

          {/* ADMIN PANEL (new route) */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} /> {/* Default Dashboard */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
