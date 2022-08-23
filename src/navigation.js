import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Resume from "./pages/resume";

export default function Navigation() {
  return (
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
      </Routes>
  );
}