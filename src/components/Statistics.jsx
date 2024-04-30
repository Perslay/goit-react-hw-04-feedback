import PropTypes from 'prop-types';
import css from '../styles/Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.list}>
      <li className={css.listItem}>
        <span>Good:</span>
        <span>{good}</span>
      </li>
      <li className={css.listItem}>
        <span>Neutral:</span>
        <span>{neutral}</span>
      </li>
      <li className={css.listItem}>
        <span>Bad:</span>
        <span>{bad}</span>
      </li>
      <li className={css.listItem}>
        <span>Total:</span>
        <span>{total}</span>
      </li>
      <li className={css.listItem}>
        <span>Positive feedback:</span>
        <span>{positivePercentage}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
