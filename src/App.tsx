import React, { lazy, Suspense, useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthProvider";

const Home = lazy(() => import("./pages/home/Home"));
const Layout = lazy(() => import("./components/common/Layout"));
const TodoPage = lazy(() => import("./pages/todos/TodoPage"));

function App() {
  const { accessToken } = useContext(AuthContext);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route
            index
            element={accessToken ? <Navigate to={"/todo"} /> : <Home />}
          />
          <Route
            path="/todo"
            element={!accessToken ? <Navigate to={"/"} /> : <TodoPage />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
