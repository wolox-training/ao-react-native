import PropTypes from 'prop-types';

export const infoUserProptype = PropTypes.shape({
  firstname: PropTypes.string,
  surname: PropTypes.string,
  username: PropTypes.string,
  address: PropTypes.string
});
