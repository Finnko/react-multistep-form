import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {getPathByStep} from '../../utils/common';
import {Header} from '../Header/Header';

import './Intro.css';

function Intro({nextStep, onButtonClick}) {
  return (
      <Fragment>
        <Header/>
        <div className="container">
          <div className="page-content">
            <h2 className="page-title">
              Как вас зовут?
            </h2>

            <p className="page-text intro-text">
              Заполните как в паспорте, это важно для банков
            </p>

            <form className="intro-form">
              <div className="form-field">
                <label htmlFor="surname" className="form-label">
                  Фамилия
                </label>
                <input type="text" id="surname" className="form-control" placeholder="Иванов"/>
              </div>

              <div className="form-field">
                <div className="form-field">
                  <label htmlFor="name" className="form-label">
                    Имя
                  </label>
                  <input type="text" id="name" className="form-control" placeholder="Иван"/>
                </div>
              </div>

              <div className="form-field">
                <div className="form-field">
                  <label htmlFor="surname" className="form-label">
                    Отчество
                  </label>
                  <input type="text" id="surname" className="form-control" placeholder="Иванович"/>
                </div>
              </div>
            </form>
          </div>

          <div className="buttons">
            <Link
                to={getPathByStep(nextStep)}
                className="button button--primary"
                onClick={() => onButtonClick('next')}
            >
              <span className="button__text">
                  Далее
              </span>
              <span className="button__icon">
                  <svg width="15" height="24" viewBox="0 0 15 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd"
                            d="M14.1213 12L2.56068 0.439339L0.439359 2.56066L9.8787 12L0.43936 21.4393L2.56068 23.5607L14.1213 12Z"
                            fill="currentColor"/>
                  </svg>
                </span>
            </Link>
          </div>
        </div>
      </Fragment>
  );
}

export {Intro};
