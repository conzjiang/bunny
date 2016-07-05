import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

const NAV_ITEM_CLASSNAME = 'nav-item';

function NavItem({ children, href, onClick }) {
  let content;

  if (href) {
    content = (
      <a href={href}>{children}</a>
    );
  } else if (onClick) {
    content = (
      <button onClick={onClick}>{children}</button>
    );
  } else {
    content = children;
  }

  return (
    <li className={NAV_ITEM_CLASSNAME}>
      {content}
    </li>
  );
}

NavItem.propTypes = propTypes;

export default NavItem;
