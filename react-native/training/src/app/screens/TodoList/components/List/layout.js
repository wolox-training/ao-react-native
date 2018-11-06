import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import Item from './components/Item';
import styles from './styles';

class List extends Component {
  keyExtractor = item => item.id;

  renderItem = ({ item, index }) => {
    const { onToggleItemCompleted, onRemoveItem } = this.props;
    return (
      <Item
        id={item.id}
        position={index}
        item={item}
        onToggleItemCompleted={onToggleItemCompleted}
        onRemoveItem={onRemoveItem}
      />
    );
  };

  render() {
    const { items } = this.props;
    return (
      <FlatList
        data={items}
        style={styles.container}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      completed: PropTypes.bool
    })
  ).isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onToggleItemCompleted: PropTypes.func.isRequired
};

export default List;
