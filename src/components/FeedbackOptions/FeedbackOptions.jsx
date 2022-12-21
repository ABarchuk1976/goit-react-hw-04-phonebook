import { ButtonSet, Button } from './FeedbackOptions.styled.js';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonSet>
    {options.map(({ id, title }) => (
      <Button name={id} key={id} type="button" onClick={onLeaveFeedback}>
        {title}
      </Button>
    ))}
  </ButtonSet>
);

export default FeedbackOptions;
