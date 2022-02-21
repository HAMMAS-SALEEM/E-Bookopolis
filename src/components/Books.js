import React from 'react';
import SingleBook from './SingleBook';

const Books = () => {
  const booksArray = [{
    id: 1, title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction',
  }, {
    id: 2, title: 'The Hunger Games', author: 'Susan Collins', genre: 'Action',
  }];
  return (
    <>
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
                  <SingleBook book={book} />
                  <input type="button" className="remove-btn" id={book.id} value="Remove" />
                </li>
              ))
          }
      </ul>
    </>
  );
};

export default Books;
