import React, { PropTypes } from 'react';
import NavItem from './NavItem';
import SearchInput from './SearchInput';

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
      <ul className="nav-items clearfix">
        <NavItem href="/"><strong>bunny</strong></NavItem>
        {signInNavItem}
      </ul>

      <SearchInput />
    </nav>
  );
}

Navigation.propTypes = propTypes;

export default Navigation;
