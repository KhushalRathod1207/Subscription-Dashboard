import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastProvider } from "./context/ToastContext";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import AddSubscription from "./components/AddSubscription";
import SubscriptionsList from "./components/SubscriptionsList";
import ManageSubscriptions from "./components/ManageSubscriptions";
import UpcomingPayments from "./components/UpcomingPayments";
import ProfileSettings from "./components/ProfileSettings";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import "./components/Navbar.css";

// ADMIN IMPORTS
import AdminLayout from "./Admin/AdminLayout";
import Dashboard from "./Admin/Dashboard";

function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <Router>
          <Navbar />

          <div className="main-content">
            <Routes>
              {/* E-commerce Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              
              {/* User Dashboard */}
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
      </CartProvider>
    </ToastProvider>
  );
}

export default App;
