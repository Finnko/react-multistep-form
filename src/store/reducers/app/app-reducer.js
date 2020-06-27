import {actionTypes} from "../../action-types";

const initialState = {
  firstName: 'Хабиров',
  secondName: 'Алексей',
  patronymic: 'Расимович',
  male: '',
  birthday: '',
  birthdayPlace: '',
  location: '',
};

export default function appReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case actionTypes.UPDATE_FIELD:
      return {
        ...state,
        [payload.key]: payload.value,
      };
  }

  return state;
}
