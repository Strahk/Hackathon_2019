import React from 'react';
import './NavFr.css';
import logo from '../images/logo.jpg';

function NavFr() {
  return (
    <div className="bar_nav">
      <div className="logo">
        <img className="icone" src={logo} alt="logo-poctefa" /> 
      </div>
      <div className="langue">
        <a href="langue" className="français">FR</a>
        <a href="langue" className="espagnol">ES</a>      
      </div>
    </div>
  );
}

export default NavFr;
