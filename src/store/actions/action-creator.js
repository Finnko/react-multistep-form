import {actionTypes} from '../action-types';

const ActionCreator = {
  updateField: (name, value) => ({
    type: actionTypes.UPDATE_FIELD,
    payload: {
      key: name,
      value
    },
  }),
};

export {ActionCreator};
