import { ButtonSet, Button } from './FeedbackOptions.styled.js';

const FeedbackOptions = ({ optionsKey, onLeaveFeedback }) => (
  <ButtonSet>
    {optionsKey.map(option => (
      <Button
        name={option}
        key={option}
        type="button"
        onClick={onLeaveFeedback}
      >
        {option[0].toUpperCase() + option.substring(1)}
      </Button>
    ))}
  </ButtonSet>
);

export default FeedbackOptions;
