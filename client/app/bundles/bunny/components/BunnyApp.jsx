import React, { PropTypes } from 'react';
import Navigation from './Navigation';
import Lists from './Lists';

const propTypes = {
  signedIn: PropTypes.bool.isRequired,
};

function BunnyApp({ signedIn }) {
  return (
    <main>
      <Navigation signedIn={signedIn} />
      <Lists lists={[]} />
    </main>
  );
}

BunnyApp.propTypes = propTypes;

export default BunnyApp;
