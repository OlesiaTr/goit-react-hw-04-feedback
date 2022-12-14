// Utils
import PropTypes from 'prop-types';

// Styles
import { Msg } from './Notification.styled';

export const Notification = ({ message }) => {
  return <Msg>{message}</Msg>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
