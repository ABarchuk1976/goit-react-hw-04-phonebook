import React, { Component } from 'react';
import shortid from 'shortid';
import Notiflix from 'notiflix';

import { AppTitle, ContactsTitle, Container } from './App.styled.js';
import InputForm from 'components/InputForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

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

  addContactHandler = ({ name, number }) => {
    const { contacts } = this.state;

    contacts.some(contact => contact.name === name)
      ? Notiflix.Notify.info(`${name} is already in contacts.`)
      : this.setState(prevState => ({
          contacts: [
            { id: shortid.generate(), name: name.trim(), number },
            ...prevState.contacts,
          ],
        }));
  };

  FilterChangeHandler = searchStr => {
    const normalizedStr = searchStr.trim().toLowerCase();
    this.setState({ filter: normalizedStr });
  };

  DeleteContactHandler = id => {
    const { contacts } = this.state;
    this.setState({ contacts: contacts.filter(contact => contact.id !== id) });
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );

    return (
      <Container>
        <AppTitle>Phonebook</AppTitle>
        <InputForm onSubmit={this.addContactHandler}></InputForm>
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter value={filter} onChange={this.FilterChangeHandler} />
        <ContactList
          contacts={visibleContacts}
          onClick={this.DeleteContactHandler}
        ></ContactList>
      </Container>
    );
  }
}

export default App;
