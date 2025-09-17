import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { ScrollToHash } from "./lib/ScrollToHash";
import { Footerpage } from "./screens/Footerpage/Footerpage";
import Board from "./screens/Team/board";
import Home from "./screens/Home";
import { MobileDomain } from "./screens/Domains/screens/MobileDomain/MobileDomain";
import Technical from "./screens/Domains/screens/Technical/Technical";
import "./global.css"; 

// Layout that includes shared footer for the marketing/landing pages only
const MainLayout = () => (
  <>
    <Outlet />
    <Footerpage />
  </>
);

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        {/* Landing / marketing stack */}
        <Route element={<MainLayout />}> 
          <Route path="/" element={<Home />} />
          {/* Board could stay in marketing layout if you want footer */}
          <Route path="/board" element={<Board />} />
          <Route path="/teams" element={<Board />} /> {/* <-- Added /teams route */}
        </Route>

        {/* Standalone domain deep-dive pages WITHOUT footer & about */}
        <Route path="/technical" element={<Technical />} />
        <Route path="/mobile" element={<MobileDomain />} />

        {/* Fallback: redirect unknown routes to home later if desired */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
