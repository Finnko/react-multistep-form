import React, {Fragment} from 'react';

import './RadioButton.css'

const RadioButton = ({label, name, groupName, value, classNames, onInputChange}) => {
  const isChecked = name === value;

  return (
      <Fragment>
        <input
            type="radio"
            name={groupName}
            id={name}
            className={classNames}
            checked={isChecked}
            value={name}
            onChange={onInputChange}
        />

        <label className="about-radio__label" htmlFor={name}>
          {label}
        </label>
      </Fragment>
  );
};

export {RadioButton};
