import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const hasVisited = localStorage.getItem("hasVisited");

  if (token) {
    return children;
  }

  if (!hasVisited) {
    localStorage.setItem("hasVisited", "true");
    return <Navigate to="/signup" />;
  }

  return <Navigate to="/login" />;
};

export default ProtectedRoute;
