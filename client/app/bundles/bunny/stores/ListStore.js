import alt from '../alt';
import ListActions from '../actions/ListActions';
import { PropTypes } from 'react';

export const propTypes = {
  creatingNewList: PropTypes.bool,
  lists: PropTypes.array.isRequired,
  signedIn: PropTypes.bool.isRequired,
};

export const initialState = {
  creatingNewList: false,
};

class ListStore {
  constructor() {
    this.bindActions(ListActions);
    this.state = Object.assign({}, initialState);
  }

  newListButtonClicked() {
    this.setState({
      creatingNewList: true,
    });
  }
}

export default alt.createStore(ListStore, 'ListStore');
