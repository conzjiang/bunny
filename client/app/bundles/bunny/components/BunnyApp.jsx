import React, { Component } from 'react';

// Components
import Navigation from './Navigation';
import NewList from './NewList'
import Lists from './Lists';

// Alt
import connectToStores from 'alt-utils/lib/connectToStores';
import ListStore, {
  propTypes,
  initialState as defaultProps,
} from '../stores/ListStore';

const storeConfig = {
  getStores() {
    return [ListStore];
  },

  getPropsFromStores() {
    return ListStore.getState();
  },
};

class BunnyApp extends Component {
  render() {
    const {
      lists,
      signedIn,
    } = this.props;

    return (
      <main>
        <Navigation signedIn={signedIn} />
        <NewList />
        <Lists lists={lists} />
      </main>
    );
  }
}

BunnyApp.propTypes = propTypes;
BunnyApp.defaultProps = defaultProps;

export default connectToStores(storeConfig, BunnyApp);
