import React from 'react';
import PropTypes from 'prop-types';

const AddBook = ({ submitBook, bookDetail }) => (
  <>
    <form id="form" onSubmit={submitBook}>
      <input type="text" id="book-title" name="title" className="book" placeholder="Book Name..." onChange={bookDetail} required />
      <input type="text" id="book-author" name="author" className="book" placeholder="Book Author..." onChange={bookDetail} required />
      <input type="submit" />
    </form>
  </>
);

AddBook.propTypes = {
  submitBook: PropTypes.func.isRequired,
  bookDetail: PropTypes.func.isRequired,
};

export default AddBook;
