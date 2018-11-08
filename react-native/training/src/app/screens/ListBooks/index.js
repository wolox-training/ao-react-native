import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Routes from '../../../constants/routes';
import actionCreators from '../../../redux/listBooks/actions';
import { itemsBookList } from '../../../propTypes/propTypes';

import Book from './layout';

class BookContainer extends Component {
  componentDidMount() {
    const { getBooks } = this.props;
    getBooks();
  }

  handleTapItem = book => {
    const { navigation, setSelectedBook } = this.props;
    setSelectedBook(book);
    navigation.navigate(Routes.BookDetail, {
      title: book.title
    });
  };

  render() {
    const { books, loading } = this.props;
    return <Book books={books} loading={loading} handleTapItem={this.handleTapItem} />;
  }
}

BookContainer.propTypes = {
  books: PropTypes.arrayOf(itemsBookList),
  getBooks: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired,
  setSelectedBook: PropTypes.func.isRequired
};

const mapStateToProps = store => ({
  books: store.listBooks.itemsBooks,
  loading: store.listBooks.itemsBooksLoading
});

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(actionCreators.getBooks()),
  setSelectedBook: book => dispatch(actionCreators.setSelectedBook(book))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookContainer);
