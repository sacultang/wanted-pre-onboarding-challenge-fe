import React from "react";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/common/Layout";
import AuthPage from "./pages/register/AuthPage";
import TodoPage from "./pages/todos/TodoPage";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
