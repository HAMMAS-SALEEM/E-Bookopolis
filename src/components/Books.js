import React from 'react';
import AddBook from './AddBook';
import SingleBook from './SingleBook';
import './Books.css';

const Books = () => (
  <section className="books-section">
    <ul className="books-container">
      <SingleBook />
    </ul>
    <AddBook />
  </section>
);

export default Books;
