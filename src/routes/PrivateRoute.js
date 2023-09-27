import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

export const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuthContext();
  return user?.id ? children : <Navigate to="/signin" />;
};
