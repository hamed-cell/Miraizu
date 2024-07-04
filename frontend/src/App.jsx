import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import AdressMap from "./pages/map/AdressMap";
// eslint-disable-next-line import/no-unresolved
import Illustration from "./assets/illustration.png";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Logo from "./assets/logo.png";
import "./App.css";

function App() {
  const location = useLocation();
  const isHidingContent = ["/map"].includes(location.pathname) === true;
  return (
    <div className="container">
<<<<<<< HEAD
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
=======
      {isHidingContent === false && (
        <header className="app-bar">
          <Link to="/">
            <img className="logo" src={Logo} alt="" />
          </Link>
          <Navbar />
        </header>
      )}

      {isHidingContent === false && (
        <div className="containerTitleIllu">
          <div className="textTitle">
            <h1>LES ENTREPRISES</h1>
            <h2>Notées sur l’inclusion</h2>
            <h3>Trouve ta Safeplace</h3>
            <button className="buttonInsc" type="button">
              S'inscrire
            </button>
          </div>
          <div className="containerIllustrationMain">
            <img className="illustrationMain" src={Illustration} alt="" />
          </div>
>>>>>>> 64c4d5ebfcca94d428669e2db335411a08912c32
        </div>
      )}
      {isHidingContent === false && (
        <main>
          <Outlet />
        </main>
      )}
      {isHidingContent === true && <AdressMap />}
      <Footer />
    </div>
  );
}

export default App;
