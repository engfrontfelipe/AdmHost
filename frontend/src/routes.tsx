// src/routes.jsx
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";

import InitialPage from "./pages/InitialPage";

import PrivateRoute from "./lib/PrivateRoute";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
 <Route
        path="/initialPage"
        element={
          <PrivateRoute>
            <InitialPage />
          </PrivateRoute>
        }
      />    </Routes>
  );
}
