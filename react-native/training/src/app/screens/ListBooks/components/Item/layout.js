import React from 'react';
import { View, Image, TouchableHighlight } from 'react-native';

import CustomText from '../../../../components/CustomText';
import defaultImage from '../../../../../assets/default-image-user.png';
import { itemsBookList } from '../../../../../propTypes/propTypes';

import styles from './styles';

function Item({ data }) {
  return (
    <TouchableHighlight>
      <View style={styles.itemContent}>
        <Image
          style={styles.bookCoverPage}
          source={data.image_url ? { uri: data.image_url } : defaultImage}
        />
        <View style={styles.bookDescription}>
          <CustomText style={styles.bookTitle}>{data.title}</CustomText>
          <CustomText>{data.author}</CustomText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

Item.propTypes = {
  data: itemsBookList
};

export default Item;
