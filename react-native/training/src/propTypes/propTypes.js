import PropTypes from 'prop-types';

export const itemsTodoList = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    completed: PropTypes.bool
  })
).isRequired;
