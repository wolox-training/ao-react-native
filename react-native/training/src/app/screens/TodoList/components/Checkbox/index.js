import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

function Checkbox({ onToggle, isChecked }) {
  return (
    <TouchableOpacity onPress={onToggle}>
      <View style={styles.box}>{isChecked && <View style={styles.inner} />}</View>
    </TouchableOpacity>
  );
}

Checkbox.propTypes = {
  onToggle: PropTypes.func,
  isChecked: PropTypes.bool
};

export default Checkbox;
