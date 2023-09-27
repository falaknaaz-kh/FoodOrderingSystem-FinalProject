import "./App.css";
import React from "react";
import Router from "./Router";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <GoogleOAuthProvider clientId="603270783085-f21v3pvht8opfakd3b4js7cd2u4n45p0.apps.googleusercontent.com">
          <Router />
        </GoogleOAuthProvider>
      </AuthProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
