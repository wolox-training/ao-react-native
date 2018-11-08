import { StyleSheet } from 'react-native';

import { white, skyblue } from '../../../../../constants/colors';

export default StyleSheet.create({
  itemContent: {
    backgroundColor: white,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 8
  },
  bookCoverPage: {
    borderRadius: 25,
    height: 50,
    marginRight: 10,
    marginVertical: 10,
    width: 50
  },
  bookDescription: {
    borderBottomWidth: 1,
    borderColor: skyblue,
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 10
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
