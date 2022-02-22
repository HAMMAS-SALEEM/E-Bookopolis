import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AddBook from './AddBook';
import SingleBook from './SingleBook';
import store from '../redux/configureStore';
import { addBook, removeBook } from '../redux/books/books';

const Books = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [books, setBooks] = useState([]);
  const dispatch = useDispatch();
  const submitBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const book = {
      id: new Date().getTime().toString(),
      title,
      author,
    };
    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
    form.reset();
    setBooks(store.getState().booksReducer);
  };

  const bookDetail = (e) => {
    const { value } = e.target;
    if (e.target.id === 'book-title') {
      setTitle(value);
    } else {
      setAuthor(value);
    }
  };

  const removeSingleBook = (e) => {
    const { id } = e.target;
    dispatch(removeBook(id));
    setBooks(store.getState().booksReducer);
  };
  return (
    <>
      <h1 className="books-page-title">E-Bookopolis</h1>
      <AddBook submitBook={submitBook} bookDetail={bookDetail} />
      <ul className="books-container">
        {
              books.map((book) => (
                <li key={book.id}>
                  <SingleBook book={book} removeSingleBook={removeSingleBook} />
                </li>
              ))
          }
      </ul>
    </>
  );
};

export default Books;
