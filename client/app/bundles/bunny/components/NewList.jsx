import React, { PropTypes, Component } from 'react';

// Alt
import connectToStores from 'alt-utils/lib/connectToStores';
import NewListStore, {
  propTypes,
  initialState as defaultProps,
} from '../stores/NewListStore';
import NewListActions from '../actions/NewListActions';
import { createList } from '../action_creators/NewListActionCreators';

const storeConfig = {
  getStores() {
    return [NewListStore];
  },

  getPropsFromStores() {
    return NewListStore.getState();
  },
};

class NewList extends Component {
  constructor(props) {
    super(props);

    this.onClickNewList = this.onClickNewList.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCloseForm = this.onCloseForm.bind(this);
  }

  onClickNewList() {
    if (this.props.formVisible) {
      return;
    }

    NewListActions.formOpened();
  }

  onChange(e) {
    NewListActions.titleEntered(e.currentTarget.value);
  }

  onSubmit(e) {
    e.preventDefault();
    createList();
  }

  onCloseForm() {
    NewListActions.formClosed();
  }

  renderButton() {
    return (
      <button
        className="new-list-button"
        onClick={this.onClickNewList}
        type="button"
        disabled={this.props.formVisible}
      >
        New List
      </button>
    );
  }

  renderForm() {
    return (
      <form
        className="list-card list-form"
        method="POST"
        action="/api/lists"
        onSubmit={this.onSubmit}
      >
        <label
          htmlFor="list_title"
        >
          What do you want your list to be called?
        </label>

        <input
          id="list_title"
          className="input list-form__input"
          type="text"
          name="list[title]"
          placeholder="ex) 'My Binge Watch Go-Tos'"
          value={this.props.title}
          onChange={this.onChange}
        />

        {this.renderErrors()}

        {this.renderSubmitButton()}

        <button
          type="button"
          className="btn list-form__button--cancel"
          onClick={this.onCloseForm}
          disabled={this.props.creating}
        >
          Cancel
        </button>
      </form>
    );
  }

  renderErrors() {
    if (!this.props.hasError) {
      return null;
    }

    if (!this.props.errors || !this.props.errors.length) {
      return (
        <small className="error">
          Something went wrong. Please try again.
        </small>
      );
    }

    return this.props.errors.map(function (error) {
      return (
        <small className="error">{error}</small>
      );
    });
  }

  renderSubmitButton() {
    let buttonText = "Create";

    if (this.props.success) {
      buttonText = "Created!";
    } else if (this.props.creating) {
      buttonText = "Creating...";
    }

    return (
      <button
        type="submit"
        className="btn list-form__button--submit"
        disabled={!this.props.title || this.props.creating}
      >
        {buttonText}
      </button>
    );
  }

  render() {
    return (
      <section>
        {this.renderButton()}
        {this.props.formVisible && this.renderForm()}
      </section>
    );
  }
}

NewList.propTypes = propTypes;
NewList.defaultProps = defaultProps;

export default connectToStores(storeConfig, NewList);
