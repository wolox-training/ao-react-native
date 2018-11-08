import React, { PureComponent } from 'react';

import { itemsBookList } from '../../../../../propTypes/propTypes';

import Item from './layout';

class ItemContainer extends PureComponent {
  render() {
    const { data } = this.props;
    return <Item data={data} />;
  }
}

ItemContainer.propTypes = {
  data: itemsBookList
};

export default ItemContainer;
