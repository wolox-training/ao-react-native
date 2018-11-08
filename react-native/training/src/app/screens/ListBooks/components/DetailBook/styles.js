import { StyleSheet } from 'react-native';

import { skyblue } from '../../../../../constants/colors';

export default StyleSheet.create({
  detailBook: {
    alignItems: 'center',
    paddingTop: 20
  },
  containerItemsDetail: {
    width: '100%',
    padding: 20
  },
  detailCoverPage: {
    height: 250,
    width: 250,
    borderRadius: 120
  },
  detailItem: {
    borderBottomWidth: 1,
    borderColor: skyblue,
    marginVertical: 5
  },
  titleDetailItem: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
