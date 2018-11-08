import PropTypes from 'prop-types';

export const itemsTodoList = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    completed: PropTypes.bool
  })
).isRequired;

export const itemsBookList = PropTypes.shape({
  id: PropTypes.number,
  author: PropTypes.string,
  title: PropTypes.string,
  genre: PropTypes.string,
  publisher: PropTypes.string,
  year: PropTypes.string,
  image_url: PropTypes.string
});
