import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import About from "./components/About/About"
import Hero from "./components/hero/hero"
import Services from "./components/Services/Services"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import ThemeToggle from "./components/ThemeToggle/ThemeToggle"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <ThemeToggle />
    </BrowserRouter>
  );
};

export default App
