import React from 'react';
import PropTypes from 'prop-types';

import List from './layout';

function ListContainer({ items, onRemoveItem, onToggleItemCompleted }) {
  return <List items={items} onRemoveItem={onRemoveItem} onToggleItemCompleted={onToggleItemCompleted} />;
}

ListContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onToggleItemCompleted: PropTypes.func.isRequired
};

export default ListContainer;
