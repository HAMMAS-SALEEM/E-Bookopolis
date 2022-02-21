import React from 'react';
import PropTypes from 'prop-types';

const SingleBook = (props) => {
  const { book } = props;
  return (
    <>
      <ul>
        <li>{book.genre}</li>
        <li>{book.title}</li>
        <li>{book.author}</li>
      </ul>
    </>
  );
};

export default SingleBook;

SingleBook.propTypes = {
  book: PropTypes.shape({
    genre: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};
