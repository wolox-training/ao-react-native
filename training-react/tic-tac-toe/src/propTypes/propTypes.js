import PropTypes from 'prop-types';

export const infoUserPropType = PropTypes.shape({
  firstname: PropTypes.string,
  surname: PropTypes.string,
  username: PropTypes.string,
  address: PropTypes.string
});
