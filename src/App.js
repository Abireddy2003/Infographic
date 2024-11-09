// src/App.js
import React from "react";
import Header from "./components/Header";
import Article from "./components/Article";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App = () => (
  <div className="App">
    <Header />
    <div className="main-content">
      <Article />
      <Sidebar />
    </div>
  </div>
);

export default App;
