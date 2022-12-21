import { StatisticsItem } from './Statistics.styled';
import Notification from 'components/Notification';

const Statistics = ({ good, neutral, bad }) => {
  const isEmpty = !good && !neutral && !bad;
  const total = good + neutral + bad;
  const percentageGood = (good * 100) / total;

  return isEmpty ? (
    <Notification message="There is no feedback" />
  ) : (
    <ul>
      <StatisticsItem>'Good: ' {good} </StatisticsItem>
      <StatisticsItem>'Neutral: ' {neutral} </StatisticsItem>
      <StatisticsItem>'Bad: ' {bad} </StatisticsItem>
      <StatisticsItem>'Total feedbacks: ' {total}</StatisticsItem>
      <StatisticsItem>'Percentage of good: ' {percentageGood} </StatisticsItem>
    </ul>
  );
};

export default Statistics;
