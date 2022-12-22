import React, { Component } from 'react';
import ContactListItem from 'components/ContactListItem';
import { StyledList } from './ContactList.styled';

class ContactList extends Component {
  DeleteBtnHandler = id => {
    this.props.onClick(id);
  };

  render() {
    const { contacts } = this.props;
    return (
      <StyledList>
        {contacts.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onClick={this.DeleteBtnHandler}
          />
        ))}
      </StyledList>
    );
  }
}

export default ContactList;
