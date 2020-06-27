import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getPathByStep} from '../../utils/common';
import {ActionCreator} from "../../store/actions/action-creator";
import NameSpace from "../../store/name-space";
import { ReactComponent as JobIcon } from "../../img/job.svg"

import './Intro.css';
import Layout from "../Layout/Layout";

function Intro_({
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
      <Layout>
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
                <label htmlFor="patronymiс" className="form-label">
                  Отчество
                </label>
                <input type="text" id="patronymiс" value={middleName} name="middleName" className="form-control" onChange={handleChange}/>
              </div>
            </div>
          </form>
        </div>
        <div className="buttons">
          <Link
              to={`/`}
              className="button button--primary"
              onClick={() => onButtonClick('next')}
          >
              <span className="button__text">
                  Далее
              </span>
            <span className="button__icon">

            </span>
          </Link>
        </div>
      </Layout>
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
