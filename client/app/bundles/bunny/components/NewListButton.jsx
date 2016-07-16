import React, { Component } from 'react';

// Alt
import ListActions from '../actions/ListActions';

const propTypes = {
  creatingNewList: false,
};

class NewListButton extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (this.props.creatingNewList) {
      return;
    }

    ListActions.newListButtonClicked();
  }

  render() {
    return (
      <section>
        <button
          className="new-list-button"
          onClick={this.onClick}
        >
          New List
        </button>
      </section>
    );
  }
}

NewListButton.propTypes = propTypes;

export default NewListButton;
