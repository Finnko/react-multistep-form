import {actionTypes} from "../../action-types";

const initialState = {
  firstName: 'Alex',
  secondName: '',
};

// function reducer(state = initialState, action) {
//   if (action.type === 'UPDATE_FIELD') {
//     return {
//       ...state,
//       [action.payload.key]: action.payload.value,
//     };
//   }
//   return state;
// }


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
