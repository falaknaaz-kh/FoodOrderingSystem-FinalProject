import "./App.css";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { PrivateRoute } from "./routes/PrivateRoute";
import { routes } from "./Constants/routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          if (route.private) {
            return (
              <Route
                path={route.path}
                element={
                  <PrivateRoute>
                    <route.Component />
                  </PrivateRoute>
                }
              />
            );
          }
          return <Route path={route.path} element={<route.Component />} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
