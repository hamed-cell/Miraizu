import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import AdressMap from './pages/map/AdressMap';
// eslint-disable-next-line import/no-unresolved
import Illustration from "./assets/illustration.png";
import Logo from "./assets/logo.png";
import "./App.css";

const App = () => {

  const location = useLocation();
  const isHidingContent = /^\/map\/\d+/.test(location.pathname);
  return (
    <div className="container">
      {isHidingContent === false && <header className="app-bar">
        <Link to="/">
          <img className="logo" src={Logo} alt="" />
        </Link>
      </header>}
      {isHidingContent === false && <div className="containerTitleIllu">
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
      </div>}
      {isHidingContent === false && <main>
        <Outlet />
      </main>}
      {isHidingContent === true && <AdressMap/>}
    </div>
  );
}

export default App;
