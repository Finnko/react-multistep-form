import React from 'react';
import {Layout} from "../Layout/Layout";
import {Link} from "react-router-dom";
import {PathName} from "../../const";

import banner from '../../img/banner.png';
import './WelcomeScreen.css';

const WelcomeScreen = () => {
  return (
      <Layout>
        <div className="page-content welcome">
          <h2 className="page-title welcome-title">
            Ипотека
          </h2>

          <p className="page-text welcome-text">
            Поможем узнать реальные ставки и получить решение по ипотеке, не выходя из дома.
          </p>

          <p className="page-text welcome-text">
            Услуга бесплатна для вас — нам платят банки
          </p>

          <div className="welcome-image">
            <img src={banner} alt="Ипотечный супергерой"/>
          </div>

          <Link
              to={PathName.INTRO}
              className="welcome-button button button--rounded button--primary"
          >
            <span className="button__text">
                Интересно
            </span>
          </Link>
        </div>
      </Layout>
  );
};

export {WelcomeScreen};
