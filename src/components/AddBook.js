import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendToAPI } from '../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const submitBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const book = {
      item_id: new Date().getTime().toString(),
      title,
      category,
    };
    dispatch(sendToAPI(book));
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
