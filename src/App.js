import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";

import "./custom.scss";
import "./App.css";
import NavBar from "./components/nav-bar/nav-bar";
import Home from "./components/home";
import DarkMode from "./components/dark-mode/dark-mode";
import Leetcode from "./components/leetcode/leetcode";
import Projects from "./components/projects";
import About from "./components/about";
import { Container, Button } from "react-bootstrap";
import LogoComponent from "./components/logo/logo-component";
import LeetcodeContent from "./components/leetcode/leetcode-content";

function App() {
  const [theme, setTheme] = useState("dark");

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    // Update the document title using the browser API
    setLocal(theme);
  });

  const setLocal = (val) => {
    localStorage.setItem("theme", val);
  };

  const storedTheme = localStorage.getItem("theme");

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

  if (defaultDark) {
    setLocal("dark");
  }

  return (
    <Container data-bs-theme={theme} fluid>
      <BrowserRouter>
        <div>
          <div className="text-center">
            <NavBar theme={theme} />

            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/leetcode" element={<Leetcode />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        </div>

        <footer className="d-flex flex-row justify-content-center footer">
          <DarkMode
            onToggleTheme={(val) => setTheme(val)}
            defaultDark={defaultDark}
          ></DarkMode>
        </footer>
      </BrowserRouter>
    </Container>
  );
}

export default App;
