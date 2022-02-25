import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { addBook } from '../redux/books/books';
import './Books.css';

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
      .then((response) => response.json())
      .catch((json) => console.log(json));
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
    setTitle(value);
  };

  const options = [
    { value: 'Action', label: 'Action' },
    { value: 'Sci-Fic', label: 'Sci-Fic' },
    { value: 'Horror', label: 'Horror' },
    { value: 'Drama', label: 'Drama' },
    { value: 'Mystery', label: 'Mystery' },
  ];
  return (
    <>
      <form id="form" className="book-form" onSubmit={submitBook}>
        <input type="text" id="book-title" name="title" className="book" placeholder="Book Name..." onChange={bookDetail} required />
        <Select className="book-author-dropdown" options={options} onChange={(e) => setCategory(e.value)} />
        <input type="submit" className="form-submit-btn" />
      </form>
    </>
  );
};

export default AddBook;
