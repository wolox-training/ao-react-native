import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

function Footer({ onRemoveCompleted }) {
  return (
    <TouchableOpacity style={styles.footer} onPress={onRemoveCompleted}>
      <Text style={styles.remove}>Remove completed items</Text>
    </TouchableOpacity>
  );
}

Footer.propTypes = {
  onRemoveCompleted: PropTypes.func
};

export default Footer;
