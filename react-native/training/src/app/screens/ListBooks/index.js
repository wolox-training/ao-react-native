import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actionCreators from '../../../redux/listBooks/actions';
import { itemsBookList } from '../../../propTypes/propTypes';

import Layout from './layout';

class BookContainer extends Component {
  componentDidMount() {
    const { getBooks } = this.props;
    getBooks();
  }

  render() {
    const { books, loading } = this.props;
    return <Layout books={books} loading={loading} />;
  }
}

BookContainer.propTypes = {
  books: PropTypes.arrayOf(itemsBookList),
  getBooks: PropTypes.func.isRequired,
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
)(BookContainer);
