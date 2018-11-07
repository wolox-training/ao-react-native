import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actionCreators from '../../../redux/listBooks/actions';
import { itemsBookList } from '../../../propTypes/propTypes';

import Item from './components/Item';
import Layout from './layout';

class Book extends Component {
  componentDidMount() {
    const { getBooks } = this.props;
    getBooks();
  }

  keyExtractor = item => `${item.id}`;

  renderItems = ({ item }) => <Item key={item.id} data={item} />;

  render() {
    const { books, loading } = this.props;
    return (
      <Layout
        books={books}
        loading={loading}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItems}
      />
    );
  }
}

Book.propTypes = {
  books: PropTypes.arrayOf(itemsBookList),
  getBooks: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }),
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = store => ({
  books: store.listBooks.itemsBooks,
  loading: store.listBooks.itemsBooksLoading
});

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(actionCreators.getBooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);
