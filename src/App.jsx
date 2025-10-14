import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddSubscription from "./components/AddSubscription";
import SubscriptionsList from "./components/SubscriptionsList";
import ManageSubscriptions from "./components/ManageSubscriptions";
import UpcomingPayments from "./components/UpcomingPayments";
import ProfileSettings from "./components/ProfileSettings";

// Updated Home page for internship
const Home = () => {
  return (
    <div className="container py-5">
      {/* Welcome Section */}
      <div className="text-center mb-5">
        <h1 className="text-primary mb-3">Welcome to My Subscription Dashboard</h1>
        <p className="lead">
          Hi! I'm <strong>Khushal Rathod</strong>, and this is my Internship Project for DG INTERN HUB.
        </p>
        <p>
          This dashboard allows you to manage subscriptions, view upcoming payments, and customize your profile and settings — all in a responsive and user-friendly interface.
        </p>
      </div>

      {/* Technologies Section */}
      <div className="mb-5">
        <h3 className="text-secondary mb-3 text-center">Technologies Used</h3>
        <div className="d-flex justify-content-center flex-wrap gap-3">
          <span className="badge bg-primary px-3 py-2">React.js</span>
          <span className="badge bg-success px-3 py-2">Bootstrap 5</span>
          <span className="badge bg-info text-dark px-3 py-2">JavaScript</span>
          <span className="badge bg-warning text-dark px-3 py-2">HTML5 & CSS3</span>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="mb-5">
        <h3 className="text-secondary mb-3 text-center">Quick Access</h3>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card text-center shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Manage Subscriptions</h5>
                <p className="card-text">Add, edit, or delete your subscriptions easily.</p>
                <a href="/subscriptions" className="btn btn-primary">Go</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Upcoming Payments</h5>
                <p className="card-text">Check which subscriptions are due in the next 7 days.</p>
                <a href="/upcoming" className="btn btn-warning">View</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Profile & Settings</h5>
                <p className="card-text">Update your profile and manage notification preferences.</p>
                <a href="/settings" className="btn btn-success">Edit</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center text-muted">
        <p>Designed & Developed by <strong>Khushal Rathod</strong> | DG Internship Project</p>
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
          <Route path="/" element={<Home />} />
          <Route path="/subscriptions" element={<ManageSubscriptions />} />
          <Route path="/add-subscription" element={<AddSubscription />} />
          <Route path="/subscriptions-list" element={<SubscriptionsList />} />
          <Route path="/upcoming" element={<UpcomingPayments />} />
          <Route path="/settings" element={<ProfileSettings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
