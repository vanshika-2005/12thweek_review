import { Navigate, Outlet, useLocation, Link } from "react-router-dom";

export default function DashboardLayout() {
  const location = useLocation();
  const token = localStorage.getItem("token");

  if (!token) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  return (
    <div>
      <h2>FundooNotes Dashboard</h2>

      <nav>
        <Link to="/dashboard">Dashboard Home</Link>
      </nav>

      <Outlet />
    </div>
  );
}