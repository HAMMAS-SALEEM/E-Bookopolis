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
    if (title && author) {
      const book = {
        id: new Date().getTime().toString(),
        title,
        author,
      };
      dispatch(addBook(book));
      setTitle('');
      setAuthor('');
      form.reset();
    }
  };
  return (
    <>
      <form id="form" onSubmit={submitBook}>
        <input type="text" id="book-title" name="title" className="book" placeholder="Book Name..." onKeyUp={(e) => setTitle(e.target.value)} required />
        <input type="text" id="book-author" name="author" className="book" placeholder="Book Author..." onKeyUp={(e) => setAuthor(e.target.value)} required />
        <input type="submit" />
      </form>
    </>
  );
};

export default AddBook;
