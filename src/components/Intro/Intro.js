import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getPathByStep} from '../../utils/common';
import {ActionCreator} from "../../store/actions/action-creator";
import NameSpace from "../../store/name-space";
import {Header} from '../Header/Header';
import { ReactComponent as JobIcon } from "../../img/job.svg"

import './Intro.css';

function Intro_({
  nextStep,
  onButtonClick,
  firstName,
  secondName,
  middleName,
  updateField,
}) {

  function handleChange(event) {
    const { name, value } = event.target;
    updateField(name, value);
  }

  return (
      <Fragment>
        <Header/>
        <div className="container">
          <div className="page-content">
            <h2 className="page-title">
             Whats your name
            </h2>

            <p className="page-text intro-text">
              Заполните как в паспорте, это важно для банков
            </p>

            <form className="intro-form">
              <div className="form-field">
                <label htmlFor="surname" className="form-label">
                  Фамилия
                </label>
                <input type="text" id="surname" value={firstName} name="firstName" className="form-control" onChange={handleChange}/>
              </div>

              <div className="form-field">
                <div className="form-field">
                  <label htmlFor="name" className="form-label">
                    Имя
                  </label>
                  <input type="text" id="name" value={secondName} name="secondName" className="form-control" onChange={handleChange}/>
                </div>
              </div>

              <div className="form-field">
                <div className="form-field">
                  <label htmlFor="middle" className="form-label">
                    Отчество
                  </label>
                  <input type="text" id="middle" value={middleName} name="middleName" className="form-control" onChange={handleChange}/>
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
                  <JobIcon />
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

function mapStateToProps(state) {
  return {
    firstName: state[NameSpace.APP].firstName,
    secondName: state[NameSpace.APP].secondName,
    middleName: state[NameSpace.APP].middleName,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateField: (name, value) => {
      dispatch(ActionCreator.updateField(name, value));
    }
  };
}

export const Intro = connect(mapStateToProps, mapDispatchToProps)(Intro_);
