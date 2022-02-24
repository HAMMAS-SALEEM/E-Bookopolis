import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/books';

const SingleBook = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);
  console.log(books);
  const removeSingleBook = (e) => {
    const { id } = e.target;
    dispatch(removeBook(id));
  };
  return (
    <>
      {
      books.length === 0
        ? 'No Books Available'
        : books.map((book) => (
          <li key={book.id}>
            <ul>
              <li>{book.title}</li>
              <li>{book.author}</li>
              <li><input type="button" className="remove-btn" id={book.id} onClick={removeSingleBook} value="Remove" /></li>
            </ul>
          </li>
        ))
     }
    </>
  );
};

export default SingleBook;
