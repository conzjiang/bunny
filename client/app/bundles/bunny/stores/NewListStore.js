import alt from '../alt';
import NewListActions from '../actions/NewListActions';
import { PropTypes } from 'react';

export const propTypes = {
  creating: PropTypes.bool,
  creationSuccess: PropTypes.bool,
  errors: PropTypes.array,
  formVisible: PropTypes.bool,
  hasError: PropTypes.bool,
  title: PropTypes.string,
};

export const initialState = {
  creating: false,
  creationSuccess: false,
  errors: [],
  formVisible: false,
  hasError: false,
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
      creationSuccess: false,
      hasError: false,
    });
  }

  creationSucceeded() {
    this.setState({
      creationSuccess: true,
    });
  }

  creationFailed(errors) {
    this.setState({
      errors,
      hasError: true,
    });
  }

  creationCompleted() {
    this.setState({
      creating: false,
    });
  }

  formOpened() {
    this.setState({
      formVisible: true,
    });
  }

  formClosed() {
    this.setState({
      formVisible: false,
    });
  }

  titleEntered(title) {
    this.setState({ title });
  }
}

export default alt.createStore(NewListStore, 'NewListStore');
