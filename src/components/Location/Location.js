import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import NameSpace from '../../store/name-space';
import {ActionCreator} from '../../store/actions/action-creator';
import {Layout} from '../Layout/Layout';
import {Input} from '../Input/Input';
import {InputViewMode, routes} from '../../const';
import {getPathIndex} from '../../utils/common';

import './Location.css';

function Location_({
  location,
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
            В каком городе покупаете квартиру?
          </h2>

          <form className="location-form">
            <Input
                id="location"
                label="Введите город"
                value={location}
                name="location"
                viewMode={InputViewMode.PLACEHOLDER}
                onInputChange={handleChange}
            />

            <p className="page-text location-text">
              Вы планируете приобретать недвижимость в
            </p>

            <span className="location-value">
              {location}
            </span>

            <p className="page-text location-note">
              Вам будут показаны предложения со ставкой для этого региона
            </p>
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
    location: state[NameSpace.APP].location,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateField: (name, value) => {
      dispatch(ActionCreator.updateField(name, value));
    }
  };
}

export const Location = connect(mapStateToProps, mapDispatchToProps)(Location_);
