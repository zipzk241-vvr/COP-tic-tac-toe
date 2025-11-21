import { Routes, Route, Navigate } from "react-router";
import { lazy, Suspense } from "react";

const StartPage = lazy(() => import("../pages/StartPage/StartPage"));
const GamePage = lazy(() => import("../pages/GamePage/GamePage"));
const ResultsPage = lazy(() => import("../pages/ResultsPage/ResultsPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

const Loading = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <h2>Завантаження...</h2>
  </div>
);

function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/game/:userId" element={<GamePage />} />
        <Route path="/results/:userId" element={<ResultsPage />} />
        <Route path="/game" element={<Navigate to="/" replace />} />
        <Route path="/results" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
