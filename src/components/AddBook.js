import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
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
  };

  const bookDetail = (e) => {
    const { value } = e.target;
    if (e.target.id === 'book-title') {
      setTitle(value);
    } else {
      setAuthor(value);
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
