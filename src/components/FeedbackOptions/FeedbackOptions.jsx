import {
  ContainerFeedbackOptions,
  ButtonFeedbackOptions,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ContainerFeedbackOptions>
      {options.map(option => {
        return (
          <li key={option}>
            <ButtonFeedbackOptions
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </ButtonFeedbackOptions>
          </li>
        );
      })}
    </ContainerFeedbackOptions>
  );
};
