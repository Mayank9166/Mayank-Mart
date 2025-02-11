import { Navigate } from "react-router-dom";
import React from "react";
const Protected = ({ children }) => {
  const isAuthenticated = localStorage.getItem("Token");

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default Protected;
