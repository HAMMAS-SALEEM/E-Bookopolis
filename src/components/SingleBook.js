import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook, getAPI } from '../redux/books/books';

const SingleBook = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);

  const sendToAPI = (id) => {
    const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/f9VfJNC0JfCwaWkDZ87T/books/${id}`;
    fetch(url, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  useEffect(() => {
    dispatch(getAPI());
  }, []);

  const removeSingleBook = (e) => {
    const { id } = e.target;
    dispatch(removeBook(id));
    sendToAPI(id);
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
              <li>{book.category}</li>
              <li><input type="button" className="remove-btn" id={book.id} onClick={removeSingleBook} value="Remove" /></li>
            </ul>
          </li>
        ))
     }
    </>
  );
};

export default SingleBook;
