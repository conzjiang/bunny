import React, { PropTypes, Component } from 'react';

// Alt
import connectToStores from 'alt-utils/lib/connectToStores';
import NewListStore, {
  propTypes,
  initialState as defaultProps,
} from '../stores/NewListStore';
import NewListActions from '../actions/NewListActions';

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
    this.onSubmit = this.onSubmit.bind(this);
    this.onCloseForm = this.onCloseForm.bind(this);
  }

  onClickNewList() {
    if (this.props.creating) {
      return;
    }

    NewListActions.creationStarted();
  }

  onSubmit() {

  }

  onCloseForm() {
    NewListActions.creationCancelled();
  }

  renderButton() {
    return (
      <button
        className="new-list-button"
        onClick={this.onClickNewList}
        type="button"
        disabled={this.props.creating}
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
        action="/lists"
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
        />

        <button
          type="submit"
          className="btn list-form__button--submit"
        >
          Create
        </button>

        <button
          type="button"
          className="btn list-form__button--cancel"
          onClick={this.onCloseForm}
        >
          Cancel
        </button>
      </form>
    );
  }

  render() {
    return (
      <section>
        {this.renderButton()}
        {this.props.creating && this.renderForm()}
      </section>
    );
  }
}

NewList.propTypes = propTypes;
NewList.defaultProps = defaultProps;

export default connectToStores(storeConfig, NewList);
