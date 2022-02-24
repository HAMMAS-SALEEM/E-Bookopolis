import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const sendToAPI = (data) => {
    fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/f9VfJNC0JfCwaWkDZ87T/books', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json());
  };

  const submitBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const book = {
      item_id: new Date().getTime().toString(),
      title,
      category,
    };
    dispatch(addBook(book));
    sendToAPI(book);
    setTitle('');
    setCategory('');
    form.reset();
  };

  const bookDetail = (e) => {
    const { value } = e.target;
    if (e.target.id === 'book-title') {
      setTitle(value);
    } else {
      setCategory(value);
    }
  };

  return (
    <>
      <form id="form" onSubmit={submitBook}>
        <input type="text" id="book-title" name="title" className="book" placeholder="Book Name..." onChange={bookDetail} required />
        <input type="text" id="book-author" name="author" className="book" placeholder="Book Author..." onChange={bookDetail} required />
        <input type="submit" />
      </form>
    </>
  );
};

export default AddBook;
