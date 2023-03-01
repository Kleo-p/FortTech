import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Services from "./components/pages/Services";

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact/" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
