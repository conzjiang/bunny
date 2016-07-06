import alt from '../alt';
import ListActions from '../actions/ListActions';

const initialState = {
  creatingNewList: false,
};

class ListStore {
  constructor() {
    this.state = Object.assign({}, initialState);
    this.bindListeners(ListActions);
  }

  newListButtonClicked() {
    this.setState({
      creatingNewList: true,
    });
  }
}

export default alt.createStore(ListStore, 'ListStore');
