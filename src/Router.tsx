import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import IntroPage from "./pages/IntroPage";
import LoadingPage from "./pages/LoadingPage";
import MapPage from "./pages/MapPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProjectsPage from "./pages/ProjectsPage";
import TicketPage from "./pages/TicketPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/apps-exhibition-webpage" element={<TicketPage />} />
        <Route path="/apps-exhibition-webpage/loading" element={<LoadingPage />} />
        <Route path="/apps-exhibition-webpage/map" element={<MapPage />} />
        <Route path="/apps-exhibition-webpage/intro" element={<IntroPage />} />
        <Route path="/apps-exhibition-webpage/projects" element={<ProjectsPage />} />
        <Route path="/apps-exhibition-webpage/projects/:projectId" element={<ProjectDetailPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
