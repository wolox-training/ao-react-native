import React from 'react';
import { Image, View } from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../../../../components/CustomText';
import images from '../../../../../constants/images';
import { strings } from '../../../../i18n';

import styles from './styles';

function BookDetail({ navigation }) {
  const book = navigation.getParam('book');
  const source = book.image_url ? { uri: book.image_url } : images.defaultCoverPage;
  return (
    <View style={styles.detailBook}>
      <Image style={styles.detailCoverPage} source={source} />
      <View style={styles.containerItemsDetail}>
        <View style={styles.detailItem}>
          <CustomText style={styles.titleDetailItem}>{strings.AUTHOR()}</CustomText>
          <CustomText>{book.author}</CustomText>
        </View>
        <View style={styles.detailItem}>
          <CustomText style={styles.titleDetailItem}>{strings.GENRE()}</CustomText>
          <CustomText>{book.genre}</CustomText>
        </View>
        <View style={styles.detailItem}>
          <CustomText style={styles.titleDetailItem}>{strings.PUBLISHER()}</CustomText>
          <CustomText>{book.publisher}</CustomText>
        </View>
        <View style={styles.detailItem}>
          <CustomText style={styles.titleDetailItem}>{strings.YEAR()}</CustomText>
          <CustomText>{book.year}</CustomText>
        </View>
      </View>
    </View>
  );
}

BookDetail.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired
  }).isRequired
};

export default BookDetail;
