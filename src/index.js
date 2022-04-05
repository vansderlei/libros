import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';
import { BooksProvider } from "./contexts/booksProvider"

ReactDOM.render(<BooksProvider><Router /></BooksProvider>, document.getElementById('root'));