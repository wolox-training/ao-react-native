import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Checkbox from '../../../Checkbox';

import styles from './styles';

function Item({ index, item, onToggleItemCompleted, onRemoveItem }) {
  const itemStyle = item.completed ? [styles.item, styles.completed] : styles.item;
  return (
    <View key={index} style={itemStyle}>
      <Text> {item.label} </Text>
      <View style={styles.rightSection}>
        <Checkbox isChecked={item.completed} onToggle={() => onToggleItemCompleted(index)} />
        <TouchableOpacity onPress={() => onRemoveItem(index)}>
          <Text style={styles.remove}> &times; </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

Item.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.shape({
    label: PropTypes.string,
    completed: PropTypes.bool
  }).isRequired,
  onToggleItemCompleted: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired
};

export default Item;
