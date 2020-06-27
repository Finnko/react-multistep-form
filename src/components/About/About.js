import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import NameSpace from '../../store/name-space';
import {ActionCreator} from '../../store/actions/action-creator';
import Layout from '../Layout/Layout';
import Input from '../Input/Input';
import {PathName, routes} from '../../const';

import './About.css';
import {getPathIndex} from '../../utils/common';

function About_({
    male,
    birthday,
    birthdayPlace,
    updateField,
    match
}) {
  const pageIndex = getPathIndex(match.path);

  function handleChange(event) {
    const { name, value } = event.target;
    updateField(name, value);
  }

  return (
      <Layout>
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

            <Input
                id="birthday"
                label="Дата рождения"
                value={birthday}
                name="birthday"
                onInputChange={handleChange}
            />

            <Input
                id="birthdayPlace"
                label="Место рождения"
                value={birthdayPlace}
                name="birthdayPlace"
                onInputChange={handleChange}
            />
          </form>
        </div>

        <div className="buttons">
          <Link
              to={routes[pageIndex - 1]}
              className="button button--secondary"
          >
            <span className="button__text">
                Назад
            </span>
          </Link>
          <Link
              to={routes[pageIndex + 1]}
              className="button button--primary"
          >
            <span className="button__text">
                Далее
            </span>
          </Link>
        </div>
      </Layout>
  );
}

function mapStateToProps(state) {
  return {
    birthday: state[NameSpace.APP].birthday,
    birthdayPlace: state[NameSpace.APP].birthdayPlace,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateField: (name, value) => {
      dispatch(ActionCreator.updateField(name, value));
    }
  };
}

export const About = connect(mapStateToProps, mapDispatchToProps)(About_);
