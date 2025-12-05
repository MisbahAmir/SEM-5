import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  // agar login hi nahi kiya
  if (!token) return <Navigate to="/loginuser" />;

  // agar route me role required hai aur match nahi kar raha
  if (role && userRole !== role) {
    return <Navigate to="/not-allowed" />;
  }

  return children;
}
