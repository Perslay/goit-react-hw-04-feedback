import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from '../styles/Notification.module.css';

export class Notification extends Component {
  render() {
    const { children, feedbackGiven, message } = this.props;

    return (
      <div>
        {feedbackGiven ? (
          children
        ) : (
          <p className={css.feedbackParag}>{message}</p>
        )}
      </div>
    );
  }
}

Notification.propTypes = {
  children: PropTypes.object.isRequired,
  feedbackGiven: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};
