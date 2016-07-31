import alt from '../alt';
import ListActions from '../actions/ListActions';
import { PropTypes } from 'react';

export const propTypes = {
  lists: PropTypes.array.isRequired,
  signedIn: PropTypes.bool.isRequired,
};

export const initialState = {
};

class ListStore {
  constructor() {
    this.state = Object.assign({}, initialState);
    this.bindActions(ListActions);
  }

  listCreated(list) {
    this.setState({ lists: [list].concat(this.state.lists) });
  }
}

export default alt.createStore(ListStore, 'ListStore');
