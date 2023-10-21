import styled from 'styled-components';

export const StatisticsList = styled.ul`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: end;
`;
export const StatisticsListItem = styled.li`
  list-style: none;
  font-size: 18px;
  font-weight: 500;
  color: #464545;

  &.bad {
    color: #e21414;
  }
  &.neutral {
    color: #edcf36;
  }
  &.good {
    color: #34d13a;
  }
`;
