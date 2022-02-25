import React from 'react';
import AddBook from './AddBook';
import SingleBook from './SingleBook';

const Books = () => (
  <>
    <AddBook />
    <ul className="books-container">
      <SingleBook />
    </ul>
  </>
);

export default Books;
