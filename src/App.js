import Menu from "./components/Menu";
import React from "react";
import reactDom from "react-dom";
import "./App.css";
import { Switch, Route, Link, Routes } from "react-router-dom";
import PlayerPlayList from "./components/playerPlayList";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/namasteTube" element={<PlayerPlayList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
