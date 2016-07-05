import React, { PropTypes } from 'react';

const propTypes = {
  signedIn: PropTypes.bool.isRequired,
};

function BunnyApp({ signedIn }) {
  return (
    <main>
      { signedIn ? 'signed in' : 'not signed in'}
    </main>
  );
}

BunnyApp.propTypes = propTypes;

export default BunnyApp;
