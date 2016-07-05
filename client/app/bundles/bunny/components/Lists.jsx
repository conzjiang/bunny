import React, { PropTypes } from 'react';
import ListShape from '../shapes/ListShape';

const propTypes = {
  lists: PropTypes.arrayOf(ListShape).isRequired,
};

function Lists({ lists }) {
  return (
    <ul className="lists">
      {
        lists.map((list) => {
          <List key={list.id} list={list} />
        })
      }
    </ul>
  );
}

Lists.propTypes = propTypes;

export default Lists;
