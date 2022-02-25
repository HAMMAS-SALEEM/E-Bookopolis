import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { getAPI, removeItem } from '../redux/books/books';
import store from '../redux/configureStore';
import './Books.css';

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

  const percentage = 65;
  return (
    <>
      {
      books.length === 0
        ? 'No Books Available'
        : books.map((book) => (
          <li key={book.item_id}>
            <ul>
              <li>
                <ul className="book-details">
                  <li>
                    <ul>
                      <li>{book.title}</li>
                      <li>{book.category}</li>
                    </ul>
                  </li>
                  <li><CircularProgressbar className="circular-progress" value={percentage} text={`${percentage}%`} /></li>
                  <li><div className="horizontal-line"> </div></li>
                  <li>
                    <ul>
                      <li>Current Chapter</li>
                      <li>Chapter 17</li>
                      <li><button type="button">Update Progress</button></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><input type="button" className="remove-btn" id={book.item_id} onClick={sendToAPI} value="Remove" /></li>
            </ul>
          </li>
        ))
     }
    </>
  );
};

export default SingleBook;
