import * as types from './types';

export const reducer = (state, action) => {
    switch (action.type) {
        case types.BOOKS_SUCCESS: {
            console.log(action.type);
            return { ...state, books: action.payload, isLoading: false };
        }
        case types.BOOKS_LOADING: {
            console.log(action.type);
            return { ...state, isLoading: true };
        }
        default:
            console.log('Não encontrei a action', action.type);
            return { ...state };
    }

};