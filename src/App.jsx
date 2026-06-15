import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Homeque from "./components/Homeque";
import NotFound from "./pages/NotFound";
import { ContactUs } from "./pages/ContactUs";
import Register from "./pages/Register";
import Login from "./pages/Login";
import TripPlanner from "./pages/TripPlanner";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/places" element={<Homeque />} />

        <Route path="/explore" element={<Explore />} />

        <Route path="/trip-planner" element={<TripPlanner />} />

        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route path="/contact" element={<ContactUs />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;