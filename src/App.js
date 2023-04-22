import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import Graph from "./components/Graph";


function App() {

  return (
  <>
    <Navbar/>
    <Home/>
    <Graph/>
  </>
);
}

export default App