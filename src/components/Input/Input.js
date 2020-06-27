import React from 'react';

import './Input.css'

const Input = ({id, label, name, value, onInputChange}) => {
  return (
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
  );
};

export default Input;
