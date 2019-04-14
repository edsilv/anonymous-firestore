import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map(todo => (
        <div key={todo}>
          {todo}
        </div>
      ))}
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string)
};

export default compose(
  connect(({ firestore }) => ({
    todos: firestore.ordered.todos ? firestore.ordered.todos.map(t => t.name) : [],
  })),
  firestoreConnect(() => [{
    collection: 'todos',
  }]),
)(TodoList);
