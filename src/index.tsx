import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { ScrollToHash } from "./lib/ScrollToHash";
import Navbar from "./components/Navbar";
import { Footerpage } from "./screens/Footerpage/Footerpage";
import Board from "./screens/Team/board";
import Home from "./screens/Home";
import { MobileDomain } from "./screens/Domains/screens/MobileDomain/MobileDomain";
import Technical from "./screens/Domains/screens/Technical/Technical";
import JoinUs from "./screens/JoinUs/JoinUs";
import "./global.css";

// Layout that includes shared navbar + footer for all main pages
const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footerpage />
  </>
);

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        {/* Main layout with shared navbar + footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<Board />} />
          <Route path="/teams" element={<Board />} />
          <Route path="/technical" element={<Technical />} />
          <Route path="/mobile" element={<MobileDomain />} />
          <Route path="/join" element={<JoinUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
