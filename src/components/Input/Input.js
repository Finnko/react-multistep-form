import React, {Fragment} from 'react';
import {InputViewMode} from '../../const';

import './Input.css'

const Input = ({id, label, name, value, viewMode, onInputChange}) => {
  const isLabel = viewMode === InputViewMode.WITH_LABEL;

  return (
      <Fragment>
        {isLabel &&
        <div className="form-field">
          <label htmlFor={id} className="form-label">
            {label}
          </label>
          <input
              type="text"
              id={id}
              value={value}
              name={name}
              className="form-control"
              onChange={onInputChange}
          />
        </div>
        }

        {!isLabel &&
        <div className="form-field">
          <input
              type="text"
              id={id}
              value={value}
              name={name}
              className="form-control form-control--placeholder"
              placeholder={label}
              onChange={onInputChange}
          />
        </div>
        }

      </Fragment>
  );
};

export {Input};
