import * as types from './types';
import booksApi from '../../api/books';

export const loadBooks = async (dispatch) => {
    dispatch({ type: types.BOOKS_LOADING});
    const { data: booksData } = await booksApi.get("/books")
    console.log('Books: ', booksData);

    return () => dispatch({ type: types.BOOKS_SUCCESS, payload: booksData });
};