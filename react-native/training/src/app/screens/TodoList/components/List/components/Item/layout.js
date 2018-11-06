import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Checkbox from '../../../Checkbox';

import styles from './styles';

function Layout({ item, onToggleItem, onRemoveItem }) {
  const itemStyle = item.completed ? [styles.item, styles.completed] : styles.item;
  return (
    <View style={itemStyle}>
      <Text> {item.label} </Text>
      <View style={styles.rightSection}>
        <Checkbox isChecked={item.completed} onToggle={onToggleItem} />
        <TouchableOpacity onPress={onRemoveItem}>
          <Text style={styles.remove}> &times; </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

Layout.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string,
    completed: PropTypes.bool
  }).isRequired,
  onToggleItem: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired
};

export default Layout;
