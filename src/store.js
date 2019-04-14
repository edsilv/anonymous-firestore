import {
  createStore,
  compose,
} from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';
import { reduxFirestore } from 'redux-firestore';
import firebase from './firebase';
import rootReducer from './reducer';

const enhancers = [
  reduxFirestore(firebase),
  reactReduxFirebase(firebase),
];

if (
  process.env.NODE_ENV === 'development' &&
  typeof window === 'object' &&
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'function'
) {
  enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

const composedEnhancers = compose(
  ...enhancers,
);

const initialState = {};

export default createStore(rootReducer, initialState, composedEnhancers);
