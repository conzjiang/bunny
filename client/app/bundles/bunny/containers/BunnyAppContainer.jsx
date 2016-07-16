import React, { PropTypes, Component } from 'react';

// Components
import BunnyApp from '../components/BunnyApp';

// Alt
import alt from '../alt';

const propTypes = {
  initData: PropTypes.object.isRequired,
};

class BunnyAppContainer extends Component {
  componentWillMount() {
    alt.bootstrap({
      ListStore: this.props.initData,
    });
  }

  render() {
    return <BunnyApp />;
  }
}

BunnyAppContainer.propTypes = propTypes;

export default BunnyAppContainer;
