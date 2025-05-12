import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../store/authStore";

export const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { token, user } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-12 w-12 border-slate-600 border-t-2 border-b-2"></div>
  </div>;
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && user?.role !== "ADMIN") {
    return <Navigate to="/" replace />;
  }

  return children ? children : <Outlet />;
};