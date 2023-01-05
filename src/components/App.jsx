import { useState, useEffect } from 'react';
import shortid from 'shortid';
import Notiflix from 'notiflix';

import { AppTitle, ContactsTitle, Container } from './App.styled.js';
import InputForm from 'components/InputForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

const App = () => {
  const { parsedContacts, parsedFilter } = initStates();
  const [contacts, setContacts] = useState(parsedContacts);
  const [filter, setFilter] = useState(parsedFilter);

  useEffect(() => {
    saveStore('contacts', contacts);
  }, [contacts]);

  useEffect(() => {
    saveStore('filter', filter);
  }, [filter]);

  function initStates() {
    let parsedContacts = [];
    let parsedFilter = '';
    try {
      parsedContacts = JSON.parse(localStorage.getItem('contacts'));
      parsedFilter = JSON.parse(localStorage.getItem('filter'));
    } catch (error) {
      console.error(error);
    } finally {
      return { parsedContacts, parsedFilter };
    }
  }

  function saveStore(key, state) {
    localStorage.setItem(key, JSON.stringify(state));
  }

  function getVisibleContacts() {
    return [
      ...contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      ),
    ];
  }

  const addContactHandler = ({ name, number }) => {
    contacts.some(contact => contact.name === name)
      ? Notiflix.Notify.info(`${name} is already in contacts.`)
      : setContacts([
          {
            id: shortid.generate(),
            name: name.trim(),
            number,
          },
          ...contacts,
        ]);
  };

  const filterChangeHandler = evt => {
    const normalizedStr = evt.target.value.trim().toLowerCase();
    setFilter(normalizedStr);
  };

  const deleteContactHandler = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <Container>
      <AppTitle>Phonebook</AppTitle>
      <InputForm contacts={contacts} onSubmit={addContactHandler}></InputForm>
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter value={filter} onChange={filterChangeHandler} />
      {!!contacts.length && (
        <ContactList
          contacts={getVisibleContacts()}
          onClick={deleteContactHandler}
        ></ContactList>
      )}
    </Container>
  );
};

export default App;
