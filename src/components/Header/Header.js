import React from 'react';
import {Link} from 'react-router-dom';
import {PathName} from "../../const";

import logo from '../../img/logo.png';
import './Header.css';

function Header () {
    return (
      <div className="container">
        <header className="header">
          <nav className="header__nav">
            <Link to={PathName.ROOT} className="header__logo">
              <img src={logo} alt="Logo" />
            </Link>
          </nav>
        </header>
      </div>
    );
}

export {Header};
