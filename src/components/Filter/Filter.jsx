import React, { Component } from 'react';
import { FilterLabel, FilterInput } from './Filter.styled';

class Filter extends Component {
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

export default Filter;
