import React from 'react';
import Home from "./components/Home";
import Resume from "./components/Resume";
import About from "./components/About";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Project from "./components/Project";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
function App() {
  return (   
    <Router>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/home"/>} />
        <Route path="/resume" element={<Resume/>} />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
