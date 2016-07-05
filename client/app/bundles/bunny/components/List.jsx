import React, { PropTypes } from 'react';
import ListShape from '../shapes/ListShape';

const propTypes = {
  list: ListShape.isRequired,
};

function List({ list }) {
  return (
    <li>
      <h2>{list.title}</h2>
    </li>
  );
}

List.propTypes = propTypes;

export default List;
