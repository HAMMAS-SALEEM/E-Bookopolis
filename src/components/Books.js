import React from 'react';
import AddBook from './AddBook';
import SingleBook from './SingleBook';

const Books = () => (
  <>
    <ul className="books-container">
      <SingleBook />
    </ul>
    <AddBook />
  </>
);

export default Books;
