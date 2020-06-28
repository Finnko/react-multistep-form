import React from 'react';
import {Header} from "../Header/Header";

import './Layout.css';

const Layout = ({children}) => {
  return (
      <div className="page">
        <Header/>
        <main>
          <div className="container">
            {children}
          </div>
        </main>
      </div>
  );
};

export {Layout};
