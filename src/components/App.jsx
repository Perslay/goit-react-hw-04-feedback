import { useState } from 'react';
import css from '../styles/App.module.css';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = feedbackType => {
    if (feedbackType === 'good') {
      setGood(good + 1);
    } else if (feedbackType === 'neutral') {
      setNeutral(neutral + 1);
    } else {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const percentage = (good * 100) / countTotalFeedback();
    return Math.round(percentage, 3);
  };

  return (
    <div className={css.appContainer}>
      <div>
        <p className={css.paragraph}>Please leave feedback</p>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClick}
        />
      </div>
      <div>
        <p className={css.paragraph}>Statistics</p>
        <Notification
          message="There is no feedback"
          feedbackGiven={good > 0 || neutral > 0 || bad > 0}
        >
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Notification>
      </div>
    </div>
  );
};
