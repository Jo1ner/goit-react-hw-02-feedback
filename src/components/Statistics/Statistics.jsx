import { StatisticsList, StatisticsListItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <StatisticsListItem className="bad">Bad: {bad}</StatisticsListItem>
      <StatisticsListItem className="neutral">
        Neutral: {neutral}
      </StatisticsListItem>
      <StatisticsListItem className="good">Good: {good}</StatisticsListItem>
      <StatisticsListItem>Total: {total()}</StatisticsListItem>
      <StatisticsListItem>
        Positive feedback: {positivePercentage()}%
      </StatisticsListItem>
    </StatisticsList>
  );
};
