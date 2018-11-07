import { StyleSheet } from 'react-native';

import { whitesmoke, chestnutRose } from '../../../../../../../constants/colors';

export default StyleSheet.create({
  item: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: whitesmoke
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  remove: {
    marginLeft: 10,
    marginBottom: 2,
    color: chestnutRose,
    fontSize: 26
  },
  completed: {
    backgroundColor: whitesmoke
  }
});
