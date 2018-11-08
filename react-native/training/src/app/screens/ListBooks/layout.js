import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import { itemsBookList } from '../../../propTypes/propTypes';
import Loadable from '../../components/Loadable';

import Item from './components/Item';

class Book extends Component {
  keyExtractor = item => `${item.id}`;

  renderItems = ({ item }) => {
    const { handleTapItem } = this.props;
    return <Item book={item} onTapItem={handleTapItem} />;
  };

  render() {
    const { books } = this.props;
    return <FlatList data={books} keyExtractor={this.keyExtractor} renderItem={this.renderItems} />;
  }
}

Book.propTypes = {
  books: PropTypes.arrayOf(itemsBookList),
  handleTapItem: PropTypes.func.isRequired
};

export default Loadable(props => props.loading)(Book);
