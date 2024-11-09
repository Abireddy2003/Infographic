// src/components/Header.js
import React from "react";

const Header = () => (
  <header className="header">
    <h1>LinkedIn</h1>
    <div className="nav">
      <button>Articles</button>
      <button>People</button>
      <button>Learning</button>
      <button>Jobs</button>
      <button>Games</button>
    </div>
    <button>Sign in</button>
  </header>
);

export default Header;
