import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

class Filter extends Component {
  static propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    pattern: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
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

export default Filter;
