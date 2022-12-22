import ContactListItem from 'components/ContactListItem';
import { StyledList } from './ContactList.styled';

const ContactList = ({ contacts }) => {
  return (
    <StyledList>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} name={name} number={number} />
      ))}
    </StyledList>
  );
};

export default ContactList;
