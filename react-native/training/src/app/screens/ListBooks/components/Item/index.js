import React, { Component } from 'react';

import { itemsBookList } from '../../../../../propTypes/propTypes';

import Layout from './layout';

class Item extends Component {
  render() {
    const { data } = this.props;
    return <Layout data={data} />;
  }
}

Item.propTypes = {
  data: itemsBookList
};

export default Item;
