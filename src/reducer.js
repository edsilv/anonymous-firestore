import { combineReducers } from 'redux';
import { reducer as firebase } from 'react-redux-firebase';
import { reducer as firestore } from 'redux-firestore';

const rootReducer = combineReducers({
  firebase,
  firestore,
});

export default rootReducer;
