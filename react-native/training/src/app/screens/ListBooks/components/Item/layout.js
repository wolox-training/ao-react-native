import React from 'react';
import { View, Image, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../../../../components/CustomText';
import defaultImage from '../../../../../assets/default-image-user.png';
import { itemsBookList } from '../../../../../propTypes/propTypes';

import styles from './styles';

function Layout({ book, handleTap }) {
  return (
    <TouchableHighlight onPress={handleTap}>
      <View style={styles.itemContent}>
        <Image
          style={styles.bookCoverPage}
          source={book.image_url ? { uri: book.image_url } : defaultImage}
        />
        <View style={styles.bookDescription}>
          <CustomText style={styles.bookTitle}>{book.title}</CustomText>
          <CustomText>{book.author}</CustomText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

Layout.propTypes = {
  book: itemsBookList,
  handleTap: PropTypes.func.isRequired
};

export default Layout;
