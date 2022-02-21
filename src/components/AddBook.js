import React from 'react';

const AddBook = () => (
  <>
    <form id="form">
      <input type="text" id="book-title" name="book-title" className="book" placeholder="Book Name..." />
      <select name="categories" id="categories-dropdown">
        <option defaultValue="Categories">Categories</option>
        <option value="horror">Horror</option>
        <option value="sci-fic">Sci-Fic</option>
        <option value="comedy">Comedy</option>
      </select>
      <input type="submit" value="Submit" />
    </form>
  </>
);

export default AddBook;
