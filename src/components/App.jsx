import React, { Component } from 'react';
import shortid from 'shortid';

import { AppTitle, ContactsTitle, Container } from './App.styled.js';
import InputForm from 'components/InputForm';
import ContactList from 'components/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addContactHandler = data => {
    const { name, number } = data;

    this.setState(prevState => ({
      contacts: [
        { id: shortid.generate(), name: name, number: number },
        ...prevState.contacts,
      ],
    }));
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
    const { contacts } = this.state;
    return (
      <Container>
        <AppTitle>Phonebook</AppTitle>
        <InputForm onSubmit={this.addContactHandler}></InputForm>
        <ContactsTitle>Contacts</ContactsTitle>
        <ContactList contacts={contacts}></ContactList>
      </Container>
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
