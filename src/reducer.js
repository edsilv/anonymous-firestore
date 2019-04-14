import { combineReducers } from 'redux';
import { reducer as firestore } from 'react-redux-firebase';

const rootReducer = combineReducers({
  firestore,
});

export default rootReducer;
