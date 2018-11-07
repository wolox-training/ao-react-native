import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actionCreators from '../../../redux/listBooks/actions';
import { itemsBookList } from '../../../propTypes/propTypes';

import Item from './components/Item';

class Book extends Component {
  componentDidMount() {
    const { getBooks } = this.props;
    getBooks();
  }

  keyExtractor = item => `${item.id}`;

  renderItems = ({ item }) => <Item key={item.id} data={item} />;

  render() {
    const { books } = this.props;
    return <FlatList data={books} keyExtractor={this.keyExtractor} renderItem={this.renderItems} />;
  }
}

Book.propTypes = {
  books: PropTypes.arrayOf(itemsBookList),
  getBooks: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
};

const mapStateToProps = store => ({
  books: store.listBooks.itemsBooks
});

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(actionCreators.getBooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);
