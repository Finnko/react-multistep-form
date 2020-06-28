import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import NameSpace from '../../store/name-space';
import {ActionCreator} from '../../store/actions/action-creator';
import {InputViewMode, personSexNames, routes} from '../../const';
import {getPathIndex} from '../../utils/common';
import {Layout} from '../Layout/Layout';
import {Input} from '../Input/Input';
import {RadioButton} from '../RadioButton/RadioButton';

import './About.css';

function About_({
    personSex,
    birthday,
    birthdayPlace,
    updateField,
    match
}) {
  const pageIndex = getPathIndex(match.path);
  const radioGroupNames = Object.keys(personSexNames);

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
              {radioGroupNames.map((name, index) => (
                <RadioButton
                    key={name + index}
                    groupName="personSex"
                    name={name}
                    value={personSex}
                    classNames={`about-radio__input visually-hidden`}
                    label={personSexNames[name]}
                    onInputChange={handleChange}
                />
              ))}
            </div>

            <Input
                id="birthday"
                label="Дата рождения"
                value={birthday}
                name="birthday"
                viewMode={InputViewMode.WITH_LABEL}
                onInputChange={handleChange}
            />

            <Input
                id="birthdayPlace"
                label="Место рождения"
                value={birthdayPlace}
                name="birthdayPlace"
                viewMode={InputViewMode.WITH_LABEL}
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
    personSex: state[NameSpace.APP].personSex,
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
