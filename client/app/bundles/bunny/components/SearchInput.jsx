import React, { PropTypes, Component } from 'react';

const initialState = {
  query: '',
};

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, initialState);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      query: e.currentTarget.value,
    });
  }

  render() {
    return (
      <section className="search">
        <input
          className="search__input"
          type="search"
          autoComplete="off"
          placeholder="Search"
          onChange={this.onChange}
          value={this.state.query}
        />
      </section>
    );
  }
}

export default SearchInput;
