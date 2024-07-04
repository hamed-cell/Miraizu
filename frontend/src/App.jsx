import React from "react";
import { Link, Outlet } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import Illustration from "./assets/illustration.png";
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
      <div className="containerTitleIllu">
        <div className="textTitle">
          <h1>LES ENTREPRISES</h1>
          <h2>Notées sur l’inclusion</h2>
          <h3>Trouve ta Safeplace ou mets un commentaire</h3>
          <button className="buttonInsc" type="button">
            S'inscrire
          </button>
        </div>
        <div className="containerIllustrationMain">
          <img className="illustrationMain" src={Illustration} alt="" />
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
