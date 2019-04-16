import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  firebaseConnect,
  isLoaded,
  isEmpty,
} from 'react-redux-firebase';

const AuthLoading = ({ auth, children }) => {
  if (isEmpty(auth) || !isLoaded(auth)) {
    return null;
  }
  return children;
}

AuthLoading.propTypes = {
  auth: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default compose(
  connect(({ firebase }) => ({
    auth: firebase.auth,
  })),
  firebaseConnect(),
)(AuthLoading);
