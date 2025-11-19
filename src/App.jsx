import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Import your pages
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Hotel from "./pages/Hotel";
import Contact from "./pages/Contact";
import BookNow from "./pages/BookNow";
import SignIn from "./pages/SignIn";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Home" />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Destination" element={<Destination />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/destinations" element={<Destination />} />
      <Route path="/Hotel" element={<Hotel />} />
      <Route path="/hotel" element={<Hotel />} />
      <Route path="/hotels" element={<Hotel />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/BookNow" element={<BookNow />} />
      <Route path="/booknow" element={<BookNow />} />
      <Route path="/book" element={<BookNow />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/About" element={<About />} />
      <Route path="/about" element={<About />} />
      <Route path="/AboutUs" element={<About />} />
      <Route path="/aboutus" element={<About />} />
    </Routes>
  );
}

export default App;
