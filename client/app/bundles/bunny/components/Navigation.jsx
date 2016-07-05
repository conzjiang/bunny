import React, { PropTypes } from 'react';
import NavItem from './NavItem';

const propTypes = {
  signedIn: PropTypes.bool.isRequired,
};

function Navigation({ signedIn }) {
  let signInNavItem;

  if (signedIn) {
    signInNavItem = (
      <NavItem>as <a className="bunny-link" href="#">conz</a></NavItem>
    );
  } else {
    signInNavItem = (
      <NavItem>sign in</NavItem>
    );
  }

  return (
    <nav>
      <ul className="clearfix">
        <NavItem href="/"><strong>bunny</strong></NavItem>
        {signInNavItem}
      </ul>
    </nav>
  );
}

Navigation.propTypes = propTypes;

export default Navigation;
