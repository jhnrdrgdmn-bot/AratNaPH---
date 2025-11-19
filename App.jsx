import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

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
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/Hotel" element={<Hotel />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/BookNow" element={<BookNow />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
