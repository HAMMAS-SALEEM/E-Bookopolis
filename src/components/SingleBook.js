import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const SingleBook = ({ book }) => {
  const dispatch = useDispatch();
  const removeSingleBook = (e) => {
    const { id } = e.target;
    dispatch(removeBook(id));
  };
  return (
    <>
      <ul>
        <li>{book.title}</li>
        <li>{book.author}</li>
      </ul>
      <input type="button" className="remove-btn" onClick={removeSingleBook} id={book.id} value="Remove" />
    </>
  );
};

export default SingleBook;

SingleBook.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};
