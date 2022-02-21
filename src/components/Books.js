import React from 'react';
import Navbar from './Navbar';

const Books = () => {
  const booksArray = [{
    id: 1, title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction',
  }];
  return (
    <>
      <Navbar />
      <h1 className="books-page-title">E-Bookopolis</h1>
      <form id="form">
        <input type="text" id="book-title" name="book-title" className="book" placeholder="Book Name..." />
        <input type="text" id="book-author" name="book-author" className="book" placeholder="Book Author..." />
        <input type="text" id="book-genre" name="book-genre" className="book" placeholder="Genre..." />
        <input type="button" value="Submit" />
      </form>
      <ul className="books-container">
        {
              booksArray.map((book) => (
                <li key={book.id}>
                  <ul>
                    <li>{book.genre}</li>
                    <li>{book.title}</li>
                    <li>{book.author}</li>
                  </ul>
                  <input type="button" className="remove-btn" id={book.id} value="Remove" />
                </li>
              ))
          }
      </ul>
    </>
  );
};

export default Books;
