import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="app-bar">
        <Link to="/">
          <img className="logo" src={Logo} alt="" />
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
