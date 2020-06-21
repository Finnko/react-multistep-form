import React from 'react';
import {Link} from 'react-router-dom';
//import logo from 'src/img/logo.png';

import './Header.css';

function Header (props) {
    return (
      <header className="header">
          <div className="header__container container">
              <nav className="header__nav">
                  <button className="header__toggle button">
                      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line x1="1" y1="1" x2="19" y2="1" stroke="#152242" strokeWidth="2" strokeLinecap="round"/>
                          <line x1="1" y1="15" x2="19" y2="15" stroke="#152242" strokeWidth="2" strokeLinecap="round"/>
                          <line x1="1" y1="8" x2="19" y2="8" stroke="#152242" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                  </button>
                  {/*<Link to={`/`} className="header__logo">*/}
                  {/*    <img src={logo} alt="Logo" />;*/}
                  {/*</Link>*/}
              </nav>
          </div>
      </header>
    );
}

export {Header};
