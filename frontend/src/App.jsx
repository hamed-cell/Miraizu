import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <header className="app-bar">
        <Link to="/">ミライズ (MiraiZu)</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
