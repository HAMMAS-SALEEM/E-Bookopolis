import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAPI, removeItem } from '../redux/books/books';

const SingleBook = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);

  const sendToAPI = (id) => {
    const code = id;
    dispatch(removeItem(code));
  };

  useEffect(() => {
    dispatch(getAPI());
  }, []);

  // const removeSingleBook = (e) => {
  //   const { id } = e.target;
  //   dispatch(removeBook(id));
  //   sendToAPI(id);
  // };
  return (
    <>
      {
      books.length === 0
        ? 'No Books Available'
        : books.map((book) => (
          <li key={book.id}>
            <ul>
              <li>{book.title}</li>
              <li>{book.category}</li>
              <li><input type="button" className="remove-btn" id={book.id} onClick={sendToAPI} value="Remove" /></li>
            </ul>
          </li>
        ))
     }
    </>
  );
};

export default SingleBook;
