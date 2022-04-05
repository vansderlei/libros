// import P from 'prop-types';
import { useReducer } from 'react';
import { BooksContext } from './context';
import { data } from './data';
import { reducer } from './reducer';

export const BooksProvider = ({ children }) => {
    const [booksState, booksDispatch] = useReducer(reducer, data);

    return (
        <BooksContext.Provider value={{ booksState, booksDispatch }}>
            {children}
        </BooksContext.Provider>
    );
};

// BooksProvider.propTypes = {
//     children: P.node.isRequired,
// };