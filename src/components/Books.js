import React from 'react';
import AddBook from './AddBook';
import SingleBook from './SingleBook';

const Books = () => (
  <>
    <h1 className="books-page-title">E-Bookopolis</h1>
    <AddBook />
    <ul className="books-container">
      <SingleBook />
    </ul>
  </>
);

export default Books;
