import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Apply from "./pages/Apply";
import TrackStatus from "./pages/TrackStatus";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Header />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/track-status" element={<TrackStatus />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <footer>
        <p>© 2026 E-Governance Digital Services Portal</p>
        <p>Designed by Faij Isani</p>
      </footer>
    </>
  );
}

export default App;