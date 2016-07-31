import alt from '../alt';
import NewListActions from '../actions/NewListActions';
import { PropTypes } from 'react';

export const propTypes = {
  creating: PropTypes.bool,
  title: PropTypes.string,
};

export const initialState = {
  creating: false,
  title: "",
};

class NewListStore {
  constructor() {
    this.state = Object.assign({}, initialState);
    this.bindActions(NewListActions);
  }

  creationStarted() {
    this.setState({
      creating: true,
    });
  }

  titleEntered(title) {
    this.setState({ title });
  }

  creationCancelled() {
    this.setState({
      creating: false,
    });
  }
}

export default alt.createStore(NewListStore, 'NewListStore');
