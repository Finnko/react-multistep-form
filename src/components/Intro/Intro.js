import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from "../../store/actions/action-creator";
import NameSpace from "../../store/name-space";
import { ReactComponent as JobIcon } from "../../img/job.svg"

import './Intro.css';
import Layout from "../Layout/Layout";
import {PathName} from '../../const';
import Input from '../Input/Input';

function Intro_({
  firstName,
  secondName,
  patronymic,
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
            <Input
              id="surname"
              label="Фамилия"
              value={firstName}
              name="firstName"
              onInputChange={handleChange}
            />

            <Input
                id="name"
                label="Имя"
                value={secondName}
                name="secondName"
                onInputChange={handleChange}
            />

            <Input
                id="patronymic"
                label="Отчество"
                value={patronymic}
                name="patronymic"
                onInputChange={handleChange}
            />
          </form>
        </div>
        <div className="buttons">
          <Link
              to={PathName.ABOUT}
              className="button button--primary"
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
    patronymic: state[NameSpace.APP].patronymic,
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
