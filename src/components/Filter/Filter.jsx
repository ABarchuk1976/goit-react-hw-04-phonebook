import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

class Filter extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
  };

  // handlerClick = evt => {
  //   this.props.onChange(evt.target.value);
  // };

  render() {
    const { value, onChange } = this.props;
    return (
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="text"
          name="filter"
          title="Filter is case unsensitive."
          value={value}
          onChange={onChange}
          required
        />
      </FilterLabel>
    );
  }
}

export default Filter;
