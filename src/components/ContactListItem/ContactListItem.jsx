import {
  ItemWrapper,
  ItemContact,
  ItemDeleteBtn,
} from './ContactListItem.styled.js';

const ContactListItem = ({ name, number }) => {
  return (
    <ItemWrapper>
      <ItemContact>
        {name}: {number}
      </ItemContact>
      <ItemDeleteBtn type="button">Delete</ItemDeleteBtn>
    </ItemWrapper>
  );
};

export default ContactListItem;
