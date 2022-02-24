const ADD_BOOKS = 'bookstore/books/ADD_BOOKS';
const REMOVE_BOOKS = 'bookstore/books/REMOVE_BOOKS';

const initialState = [];

export const addBook = (playload) => ({
  type: ADD_BOOKS,
  playload,
});

export const removeBook = (playload) => ({
  type: REMOVE_BOOKS,
  playload,
});

export const getAPI = () => (dispatch) => fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/f9VfJNC0JfCwaWkDZ87T/books')
  .then((response) => response.json())
  .then((obj) => {
    const obj2 = Object.keys(obj).map((key) => ({
      id: key,
      title: obj[key][0].title,
      category: obj[key][0].category,
    }));
    obj2.forEach((item) => {
      dispatch({ type: ADD_BOOKS, playload: item });
    });
  });

export const removeItem = (id) => (dispatch) => {
  console.log(id);
  const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/f9VfJNC0JfCwaWkDZ87T/books/${id}`;
  fetch(url, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
  dispatch({ type: REMOVE_BOOKS, playload: id.target.id });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKS:
      return [...state, action.playload];
    case REMOVE_BOOKS:
      return state.filter((book) => book.id.toString() !== action.playload.toString());
    default:
      return state;
  }
};

export default reducer;
