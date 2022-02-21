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
        <select name="categories" id="categories-dropdown">
          <option value="" disabled selected hidden>Categories</option>
          <option value="horror">Horror</option>
          <option value="sci-fic">Sci-Fic</option>
          <option value="comedy">Comedy</option>
        </select>
        <input type="submit" value="Submit" />
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
