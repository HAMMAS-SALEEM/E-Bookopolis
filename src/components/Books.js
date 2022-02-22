import React from 'react';
import AddBook from './AddBook';
import SingleBook from './SingleBook';

const Books = () => {
  const booksArray = [{
    id: '1', title: 'Dune', author: 'Frank Herbert',
  }, {
    id: '2', title: 'The Hunger Games', author: 'Susan Collins',
  }];
  return (
    <>
      <h1 className="books-page-title">E-Bookopolis</h1>
      <AddBook />
      <ul className="books-container">
        {
              booksArray.map((book) => (
                <li key={book.id}>
                  <SingleBook book={book} />
                </li>
              ))
          }
      </ul>
    </>
  );
};

export default Books;
