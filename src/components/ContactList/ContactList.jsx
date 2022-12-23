import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem';
import { StyledList } from './ContactList.styled';

class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired
    ),
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const { contacts, onClick } = this.props;
    return (
      <StyledList>
        {contacts.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onClick={onClick}
          />
        ))}
      </StyledList>
    );
  }
}

export default ContactList;
