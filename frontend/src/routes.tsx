// src/routes.jsx
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";

import InitialPage from "./pages/InitialPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/initialPage" element={<InitialPage />} />
    </Routes>
  );
}
