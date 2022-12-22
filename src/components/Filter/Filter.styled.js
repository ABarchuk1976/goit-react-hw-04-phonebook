import PropTypes from 'prop-types';
import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: block;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const FilterInput = styled.input`
  display: block;
  width: 410px;
  margin-top: 5px;
  outline: none;
`;

FilterInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};
