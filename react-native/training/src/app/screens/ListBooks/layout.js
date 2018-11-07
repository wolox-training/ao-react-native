import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import { itemsBookList } from '../../../propTypes/propTypes';
import Loadable from '../../components/Loadable';

function Layout({ books, keyExtractor, renderItem }) {
  return <FlatList data={books} keyExtractor={keyExtractor} renderItem={renderItem} />;
}

Layout.propTypes = {
  books: PropTypes.arrayOf(itemsBookList),
  keyExtractor: PropTypes.func.isRequired,
  renderItem: PropTypes.func.isRequired
};

export default Loadable(props => props.loading)(Layout);
