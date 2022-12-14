// Utils
import PropTypes from 'prop-types';

// Styles
import { Desc } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <Desc>Good: {good}</Desc>
      <Desc>Neutral: {neutral}</Desc>
      <Desc>Bad: {bad}</Desc>
      <Desc>Total: {total}</Desc>
      <Desc>Positive feedback: {positivePercentage}%</Desc>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
