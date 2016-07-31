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
}

export default alt.createStore(ListStore, 'ListStore');
