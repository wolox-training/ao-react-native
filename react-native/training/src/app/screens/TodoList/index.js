import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actionCreators from '../../../redux/todoList/actions';
import { itemsTodoList } from '../../../propTypes/propTypes';

import TodoList from './layout';

function TodoListContainer({ items, addItem, removeItem, toggleItemCompleted, removeCompleted }) {
  return (
    <TodoList
      items={items}
      addItem={addItem}
      removeItem={removeItem}
      toggleItemCompleted={toggleItemCompleted}
      removeCompleted={removeCompleted}
    />
  );
}

TodoListContainer.propTypes = {
  items: itemsTodoList,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  toggleItemCompleted: PropTypes.func.isRequired,
  removeCompleted: PropTypes.func.isRequired
};

const mapStateToProps = store => ({
  items: store.todoList.items
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(actionCreators.addItem(item)),
  removeItem: item => dispatch(actionCreators.removeItem(item)),
  toggleItemCompleted: item => dispatch(actionCreators.toggleItemCompleted(item)),
  removeCompleted: () => dispatch(actionCreators.removeCompleted())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);
