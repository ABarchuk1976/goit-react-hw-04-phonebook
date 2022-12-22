import React, { Component } from 'react';
import shortid from 'shortid';
import Notiflix from 'notiflix';

import { AppTitle, ContactsTitle, Container } from './App.styled.js';
import InputForm from 'components/InputForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
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
