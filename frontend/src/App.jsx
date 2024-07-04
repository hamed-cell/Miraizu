import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import AdressMap from "./pages/map/AdressMap";
// eslint-disable-next-line import/no-unresolved
import Illustration from "./assets/illustration.png";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Logo from "./assets/logo.png";
import People from "./assets/people1.png";
import "./App.css";

function App() {
  const location = useLocation();
  const isHidingHomePage = ["/"].includes(location.pathname);
  const isHidingContent = /^\/map\/\d+/.test(location.pathname);
  return (
    <div className="container">
      {isHidingContent === false && (
        <header className="app-bar">
          <Link to="/">
            <img className="logo" src={Logo} alt="" />
          </Link>
          <Navbar />
        </header>
      )}

      {isHidingContent === false && isHidingHomePage === true && (
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
        </div>
      )}
      {isHidingContent === false && isHidingHomePage === true && (
        <div className="peopleContent">
          <img className="people" src={People} alt="" />
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
