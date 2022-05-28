import Menu from "./components/Menu";
import React from "react";
import reactDom from "react-dom";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PlayerPlayList from "./components/playerPlayList";

function App() {
  return (
    <div>
      <Menu />
      <PlayerPlayList />
    </div>
  );
}

export default App;
