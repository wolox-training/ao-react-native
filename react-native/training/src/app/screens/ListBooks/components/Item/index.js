import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { itemsBookList } from '../../../../../propTypes/propTypes';

import Layout from './layout';

class Item extends Component {
  handleOnTap = () => {
    const { onTapItem, book } = this.props;
    onTapItem(book);
  };

  render() {
    const { book } = this.props;
    return <Layout book={book} handleTap={this.handleOnTap} />;
  }
}

Item.propTypes = {
  book: itemsBookList,
  onTapItem: PropTypes.func.isRequired
};

export default Item;
