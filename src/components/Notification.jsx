import PropTypes from 'prop-types';
import css from '../styles/Notification.module.css';

export const Notification = ({ children, feedbackGiven, message }) => {
  return (
    <div>
      {feedbackGiven ? (
        children
      ) : (
        <p className={css.feedbackParag}>{message}</p>
      )}
    </div>
  );
};

Notification.propTypes = {
  children: PropTypes.object.isRequired,
  feedbackGiven: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};
