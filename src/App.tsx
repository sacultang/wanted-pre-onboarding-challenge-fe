import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import ProviderUser from "./context/ProviderUser";
const Home = lazy(() => import("./pages/home/Home"));
const Layout = lazy(() => import("./components/common/Layout"));
const TodoPage = lazy(() => import("./pages/todos/TodoPage"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProviderUser>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/todo" element={<TodoPage />} />
          </Route>
        </Routes>
      </ProviderUser>
    </Suspense>
  );
}

export default App;
