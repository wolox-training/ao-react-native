import React from 'react';
import PropTypes from 'prop-types';

import { itemsTodoList } from '../../../../../propTypes/propTypes';

import List from './layout';

function ListContainer({ items, onRemoveItem, onToggleItemCompleted }) {
  return <List items={items} onRemoveItem={onRemoveItem} onToggleItemCompleted={onToggleItemCompleted} />;
}

ListContainer.propTypes = {
  items: itemsTodoList,
  onRemoveItem: PropTypes.func.isRequired,
  onToggleItemCompleted: PropTypes.func.isRequired
};

export default ListContainer;
