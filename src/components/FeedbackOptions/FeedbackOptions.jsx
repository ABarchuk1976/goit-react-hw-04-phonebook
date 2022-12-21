import { ButtonSet, Button } from './FeedbackOptions.styled.js';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonSet>
    {options.map((option, idx) => (
      <Button type="button" onClick={onLeaveFeedback}>
        {option}
      </Button>
    ))}
  </ButtonSet>
);

export default FeedbackOptions;
