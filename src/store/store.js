import {createStore, compose, applyMiddleware} from 'redux';
import {rootReducer} from './reducers/root-reducer';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

export {store};

// store.dispatch({
//   type: 'UPDATE_FIELD',
//   payload: {
//     key: 'gender',
//     value: 'male',
//   }
// });

