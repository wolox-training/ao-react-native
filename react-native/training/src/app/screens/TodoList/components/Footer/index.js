import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import { strings } from './i18n';
import styles from './styles';

function Footer({ onRemoveCompleted }) {
  return (
    <TouchableOpacity style={styles.footer} onPress={onRemoveCompleted}>
      <Text style={styles.remove}>{strings.FOOTER_MESSAGE()}</Text>
    </TouchableOpacity>
  );
}

Footer.propTypes = {
  onRemoveCompleted: PropTypes.func.isRequired
};

export default Footer;
