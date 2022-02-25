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
          <li className="single-book" key={book.item_id}>
            <ul>
              <li>
                <ul>
                  <li className="book-details">
                    <ul className="book-api-details-container">
                      <li className="book-category">{book.category}</li>
                      <li className="book-title">{book.title}</li>
                    </ul>
                    <ul className="progress-details-container">
                      <li><CircularProgressbar className="circular-progress" value={percentage} text={`${percentage}%`} /></li>
                      <li><div className="horizontal-line"> </div></li>
                      <li>
                        <ul>
                          <li>Current Chapter</li>
                          <li>Chapter 01</li>
                          <li><button type="button">Update Progress</button></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="book-btn-container">
                  <li><input type="button" className="comments-btn btn" value="Comments" /></li>
                  <li><div className="small-horizontal-line"> </div></li>
                  <li><input type="button" className="remove-btn btn" id={book.item_id} onClick={sendToAPI} value="Remove" /></li>
                  <li><div className="small-horizontal-line"> </div></li>
                  <li><input type="button" className="edit-btn btn" value="Edit" /></li>
                </ul>
              </li>
            </ul>
          </li>
        ))
     }
    </>
  );
};

export default SingleBook;
