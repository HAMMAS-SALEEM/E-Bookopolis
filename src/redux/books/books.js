const ADD_BOOKS = 'bookstore/books/ADD_BOOKS';
const REMOVE_BOOKS = 'bookstore/books/REMOVE_BOOKS';

const initialState = [];

export const addBook = playload => ({
    type: ADD_BOOKS,
    playload,
})

export const removeBook = playload => ({
    type: REMOVE_BOOKS,
    playload
})

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_BOOKS:
            return [...state, action.playload];
        case REMOVE_BOOKS:
            return state.filter(book=>book.id===id);
        default:
            return state;
    }
}