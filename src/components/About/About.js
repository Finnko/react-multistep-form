import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {getPathByStep} from '../../utils/common';
import {Header} from '../Header/Header';

import './About.css';

function About({prevStep, nextStep, onButtonClick}) {
  return (
      <Fragment>
        <Header/>
        <div className="container">
          <div className="page-content">
            <h2 className="page-title">
              Расскажите о себе
            </h2>

            <form className="about-form">
              <div className="about-radio">
                <input type="radio" name="sex" id="female" className="about-radio__input visually-hidden" checked/>
                <label className="about-radio__label" htmlFor="female">Женщина</label>
                <input type="radio" name="sex" id="male" className="about-radio__input visually-hidden"/>
                <label className="about-radio__label" htmlFor="male">Мужчина</label>
              </div>

              <div className="form-field">
                <label htmlFor="surname" className="form-label">
                  Дата рождения
                </label>
                <input type="text" id="surname" className="form-control" placeholder="25.09.1987"/>
              </div>

              <div className="form-field">
                <div className="form-field">
                  <label htmlFor="name" className="form-label">
                    Место рождения
                  </label>
                  <input type="text" id="name" className="form-control" placeholder="Село Иванововское"/>
                </div>
              </div>
            </form>

            <div className="buttons">
              <Link
                  to={getPathByStep(prevStep)}
                  className="button button--secondary "
                  onClick={() => onButtonClick('prev')}
              >
                <span className="button__icon">
                    <svg width="15" height="24" viewBox="0 0 15 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M14.1213 12L2.56068 0.439339L0.439359 2.56066L9.8787 12L0.43936 21.4393L2.56068 23.5607L14.1213 12Z"
                              fill="currentColor"/>
                    </svg>
                </span>
                <span className="button__text">
                    Назад
                </span>
              </Link>
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
        </div>
      </Fragment>
  );
}

export {About};
