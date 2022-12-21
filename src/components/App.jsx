import React, { Component } from 'react';
import { appTitle, contactsTitle } from './App.styled.js';
import InputForm from 'componetns/';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // onLeaveFeedback = evt => {
  //   const { name } = evt.target;

  //   this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  // };

  // countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   return good + neutral + bad;
  // };

  // countPositiveFeedbackPercentage = () => {
  //   const { good } = this.state;
  //   const total = this.countTotalFeedback();
  //   return Math.round((good * 100) / total) + '%';
  // };

  render() {
<<<<<<< Updated upstream
    const thisState = this.state;

=======
>>>>>>> Stashed changes
    return (
      <>
        <appTitle>Phonebook</appTitle>

        <contactsTitle>Contacts</contactsTitle>
      </>
    );
  }
}

export default App;

/* <Section title="Please leave feedback">
          <FeedbackOptions
            optionsKey={Object.keys(thisState)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            optionsKey={Object.keys(thisState)}
            optionsValue={Object.values(thisState)}
            countTotalFeedback={this.countTotalFeedback}
            countPositiveFeedbackPercentage={
              this.countPositiveFeedbackPercentage
            }
          />
        </Section> */
