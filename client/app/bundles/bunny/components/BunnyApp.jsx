import React, { PropTypes } from 'react';
import Navigation from './Navigation';

const propTypes = {
  signedIn: PropTypes.bool.isRequired,
};

function BunnyApp({ signedIn }) {
  return (
    <main>
      <Navigation signedIn={signedIn} />
    </main>
  );
}

BunnyApp.propTypes = propTypes;

export default BunnyApp;
