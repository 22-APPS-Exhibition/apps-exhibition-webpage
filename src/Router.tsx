import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IntroPage from "./pages/IntroPage";
import MapPage from "./pages/MapPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProjectsPage from "./pages/ProjectsPage";
import TicketPage from "./pages/TicketPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TicketPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/info" element={<IntroPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
