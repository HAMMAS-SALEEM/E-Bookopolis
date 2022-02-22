import React from 'react';
import PropTypes from 'prop-types';

const SingleBook = ({ book, removeSingleBook }) => (
  <>
    <ul>
      <li>{book.title}</li>
      <li>{book.author}</li>
    </ul>
    <input type="button" className="remove-btn" onClick={removeSingleBook} id={book.id} value="Remove" />
  </>
);

export default SingleBook;

SingleBook.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  removeSingleBook: PropTypes.func.isRequired,
};
