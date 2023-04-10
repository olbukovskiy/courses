import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const SharedLayout = lazy(
  () => import("../components/SharedLayout/SharedLayout")
);
const Home = lazy(() => import("../pages/Home/Home"));
const Courses = lazy(() => import("../pages/Courses/Courses"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
