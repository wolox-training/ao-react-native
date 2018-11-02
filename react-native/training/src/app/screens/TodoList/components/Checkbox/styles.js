import { StyleSheet } from 'react-native';

import { black, blackTransparent } from '../../../../../constants/colors';

export default StyleSheet.create({
  box: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: black
  },
  inner: {
    flex: 1,
    margin: 2,
    backgroundColor: blackTransparent
  }
});
