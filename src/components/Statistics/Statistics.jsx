import { StatisticsItem } from './Statistics.styled';
import Notification from 'components/Notification';

const Statistics = props => {
  const {
    good,
    neutral,
    bad,
    options,
    countTotalFeedback,
    countPositiveFeedbackPercentage,
  } = props;
  const notEmpty = good || neutral || bad;
  const total = countTotalFeedback();
  const percentageGood = countPositiveFeedbackPercentage();

  return notEmpty ? (
    <ul>
      {options.map(({ id, title }) => (
        <StatisticsItem key={id}>
          {title}: {props[id]}
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
