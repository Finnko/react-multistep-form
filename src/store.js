import {createStore} from 'redux';

const initialState = {
  firstName: 'Max',
  secondName: '',
  
  // 
};

function reducer(state = initialState, action) {
  if (action.type === 'UPDATE_FIELD') {
    return {
      ...state,
      [action.payload.key]: action.payload.value,
    };
  }
  return state;
}

const store = createStore(reducer);


// store.subscribe(() => {
//   console.log('updated!', store.getState());
// })

// store.dispatch({
//   type: 'UPDATE_FIELD',
//   payload: {
//     key: 'gender',
//     value: 'male',
//   }
// });

export {store};