import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem';
import { StyledList } from './ContactList.styled';

class ContactList extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func,
  };

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
