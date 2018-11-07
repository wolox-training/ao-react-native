import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Layout from './layout';

class Item extends Component {
  handleToggleItem = () => {
    const { onToggleItemCompleted, position } = this.props;
    onToggleItemCompleted(position);
  };

  handleRemoveItem = () => {
    const { onRemoveItem, position } = this.props;
    onRemoveItem(position);
  };

  render() {
    const { item } = this.props;
    return <Layout item={item} onToggleItem={this.handleToggleItem} onRemoveItem={this.handleRemoveItem} />;
  }
}

Item.propTypes = {
  position: PropTypes.number.isRequired,
  item: PropTypes.shape({
    label: PropTypes.string,
    completed: PropTypes.bool
  }).isRequired,
  onToggleItemCompleted: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired
};

export default Item;
