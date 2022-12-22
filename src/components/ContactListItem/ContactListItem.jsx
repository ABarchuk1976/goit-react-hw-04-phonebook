import PropTypes from 'prop-types';
import {
  ItemWrapper,
  ItemContact,
  ItemDeleteBtn,
} from './ContactListItem.styled.js';

const ContactListItem = ({ id, name, number, onClick }) => {
  const handlerDeleteClick = () => {
    onClick(id);
  };

  return (
    <li>
      <ItemWrapper>
        <ItemContact>
          {name}: {number}
        </ItemContact>
        <ItemDeleteBtn type="button" onClick={handlerDeleteClick}>
          Delete
        </ItemDeleteBtn>
      </ItemWrapper>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactListItem;
