import '../App.css';
import '.././public/fonts/font.css';
import React, { useState, useEffect } from "react";
import NoteState from "./context/notes/State";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Notes from './components/Notes';
import Footer from './components/Footer';
import Addnote from './components/Addnote';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  // Retrieve the dark mode preference from session storage or default to true
  const [isDark, setDark] = useState(() => {
    const storedDarkMode = sessionStorage.getItem('darkMode');
    return storedDarkMode ? JSON.parse(storedDarkMode) : true;
  });

  // Update session storage whenever the dark mode state changes
  useEffect(() => {
    sessionStorage.setItem('darkMode', JSON.stringify(isDark));
  }, [isDark]);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDark(prevDark => !prevDark);
  };

  return (
    <div data-theme={isDark ? "business" : "lofi"} className='font-custom'>
      <NoteState>
        <Router>
          <Nav darkMode={toggleDarkMode} dark={isDark} />
          <Alert />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path='/notes' element={<Notes />} />
            <Route exact path='/addnote' element={<Addnote />} />
            <Route exact path="/login" element={<Login dark={isDark} />} />
            <Route exact path="/signup" element={<Signup dark={isDark} />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
          {isDark ? <Footer color="white" /> : <Footer color="black" />}
        </Router>
      </NoteState>
    </div>
  )
}
