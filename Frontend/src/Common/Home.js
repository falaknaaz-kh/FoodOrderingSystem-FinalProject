import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const Home = () => {
  const { user } = useAuthContext();

  if (user?.role === "customer") {
    return <Navigate to="/CustomerHomePage" />;
  } else if (user?.role === "admin") {
    return <Navigate to="/AdminHomePage" />;
  } else if (user?.role === "deliveryBoy") {
    return <Navigate to="/DeliveryBoyHomePage" />;
  }
  return <Navigate to="/CustomerHomePage" />;
};

export default Home;
