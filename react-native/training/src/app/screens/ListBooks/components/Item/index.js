import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { itemsBookList } from '../../../../../propTypes/propTypes';

import Item from './layout';

class ItemContainer extends PureComponent {
  handleOnTap = () => {
    const { onTapItem, book } = this.props;
    onTapItem(book);
  };

  render() {
    const { book } = this.props;
    return <Item book={book} handleTap={this.handleOnTap} />;
  }
}

ItemContainer.propTypes = {
  book: itemsBookList,
  onTapItem: PropTypes.func.isRequired
};

export default ItemContainer;
