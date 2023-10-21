import {
  ContainerFeedbackOptions,
  ButtonFeedbackOptions,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  addBadFeadback,
  addNeutralFeadback,
  addGoodFeadback,
}) => {
  return (
    <ContainerFeedbackOptions>
      <ButtonFeedbackOptions
        type="button"
        className=""
        onClick={addBadFeadback}
      >
        Bad
      </ButtonFeedbackOptions>
      <ButtonFeedbackOptions
        type="button"
        className=""
        onClick={addNeutralFeadback}
      >
        Neutral
      </ButtonFeedbackOptions>
      <ButtonFeedbackOptions
        type="button"
        className=""
        onClick={addGoodFeadback}
      >
        Good
      </ButtonFeedbackOptions>
    </ContainerFeedbackOptions>
  );
};
