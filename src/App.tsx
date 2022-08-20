import React from "react";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/common/Layout";
import AuthPage from "./pages/auth/AuthPage";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
      </Route>
    </Routes>
  );
}

export default App;
