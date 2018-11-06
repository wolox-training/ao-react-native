import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';

import Item from './components/Item';
import styles from './styles';

class List extends Component {
  renderItem = (item, i) => {
    const { onToggleItemCompleted, onRemoveItem } = this.props;
    return (
      <Item
        key={i + item.label}
        position={i}
        item={item}
        onToggleItemCompleted={onToggleItemCompleted}
        onRemoveItem={onRemoveItem}
      />
    );
  };

  render() {
    const { items } = this.props;
    return <ScrollView style={styles.container}>{items.map(this.renderItem)}</ScrollView>;
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
