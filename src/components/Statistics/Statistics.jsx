import { StatisticsItem } from './Statistics.styled';
import Notification from 'components/Notification';

const Statistics = props => {
  const {
    optionsKey,
    optionsValue,
    countTotalFeedback,
    countPositiveFeedbackPercentage,
  } = props;

  const notEmpty = !!optionsValue.reduce((acc, value) => acc + value, 0);

  const total = countTotalFeedback();
  const percentageGood = countPositiveFeedbackPercentage();

  return notEmpty ? (
    <ul>
      {optionsKey.map((option, idx) => (
        <StatisticsItem key={option}>
          {option[0].toUpperCase() + option.substring(1)}: {optionsValue[idx]}
        </StatisticsItem>
      ))}
      <StatisticsItem>Total feedbacks: {total}</StatisticsItem>
      <StatisticsItem>Positive feedbacks: {percentageGood} </StatisticsItem>
    </ul>
  ) : (
    <Notification message="There is no feedback" />
  );
};

export default Statistics;
