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
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default ContactListItem;
