import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

function Title({ children }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}
export default Title;
