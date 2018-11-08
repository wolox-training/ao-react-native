import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import CustomButton from '../../components/CustomButton';
import { strings } from '../../i18n';

import styles from './styles';

function Home({ onLogout, navigateToBooks }) {
  return (
    <View style={styles.container}>
      <Text>This is a test</Text>
      <CustomButton onPress={onLogout} green title={strings.BTN_LOGOUT()} style={styles.mainButton} />
      <CustomButton onPress={navigateToBooks} blue title={strings.BTN_GO_BOOKS()} style={styles.mainButton} />
    </View>
  );
}

Home.propTypes = {
  onLogout: PropTypes.func.isRequired,
  navigateToBooks: PropTypes.func.isRequired
};

export default Home;
