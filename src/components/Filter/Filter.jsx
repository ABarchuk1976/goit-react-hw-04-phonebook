import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

class Filter extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
  };

  handlerClick = evt => {
    this.props.onChange(evt.target.value);
  };

  render() {
    return (
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="text"
          name="filter"
          title="Filter is case unsensitive."
          value={this.props.value}
          onChange={this.handlerClick}
          required
        />
      </FilterLabel>
    );
  }
}

FilterInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default Filter;
