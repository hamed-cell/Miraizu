import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import AdressMap from './pages/map/AdressMap';
import './App.css';

const App = () => {

  const location = useLocation();
  const isHidingContent = ["/map"].includes(location.pathname) === true;
  return (
    <div className="container">
      {isHidingContent === false && <header className="app-bar">
        <Link to="/">ミライズ (MiraiZu)</Link>
      </header>}
      {isHidingContent === false && <main>
        <Outlet />
      </main>}
      <AdressMap/>
    </div>
  );
};

export default App;