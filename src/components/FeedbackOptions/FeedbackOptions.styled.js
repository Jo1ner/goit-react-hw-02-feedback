import styled from 'styled-components';

export const ContainerFeedbackOptions = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  li {
    list-style: none;
  }
`;

export const ButtonFeedbackOptions = styled.button`
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 30px;
  font-weight: 600px;
  background-color: #caf2e5;
  border-radius: 5px;
  cursor: pointer;
  text-transform: capitalize;

  &:hover {
    background-color: #9fcdbe;
  }
`;
