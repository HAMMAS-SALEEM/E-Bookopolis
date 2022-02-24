import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAPI, removeItem } from '../redux/books/books';
import store from '../redux/configureStore';

const SingleBook = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);

  const sendToAPI = (e) => {
    const code = e.target.id;
    dispatch(removeItem(code));
  };

  useEffect(() => {
    dispatch(getAPI());
    return () => {
      store.getState().booksReducer = [];
    };
  }, []);
  return (
    <>
      {
      books.length === 0
        ? 'No Books Available'
        : books.map((book) => (
          <li key={book.item_id}>
            <ul>
              <li>{book.title}</li>
              <li>{book.category}</li>
              <li><input type="button" className="remove-btn" id={book.item_id} onClick={sendToAPI} value="Remove" /></li>
            </ul>
          </li>
        ))
     }
    </>
  );
};

export default SingleBook;
