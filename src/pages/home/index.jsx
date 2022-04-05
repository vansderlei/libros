import React, { useEffect, useContext, useRef, useState } from 'react';
import './styles.css';
import { loadBooks } from '../../contexts/booksProvider/actions';
import { BooksContext } from '../../contexts/booksProvider/context';
import Logo from "../../components/logo"
import Subtitle from "../../components/subtitle"
import BooksCard from "../../components/bookCard"
import Loader from "../../components/loaders/loader"
import SearchInput from '../../components/searchInput';
import { useHistory } from "react-router-dom";

function Home() {
	const isMounted = useRef(true);
	document.title = `Libros`

	const booksContext = useContext(BooksContext)
	const { booksState, booksDispatch } = booksContext
	
	useEffect(() => {
		loadBooks(booksDispatch).then((dispatch) => { if (isMounted.current) dispatch() });
		return () => isMounted.current = false;
	},[booksDispatch]);
	const [searchValue, setSearchValue] = useState('')
	const { push: routerPush } = useHistory();


	const handleChange = (e) => {
		const { value } = e.target;
		setSearchValue(value);
	};

	const openBookPage = (book) =>{
		localStorage.setItem("selectedBook", JSON.stringify(book))
		routerPush("/book/" + book.ISBN);
	}

	const filteredBooksList = searchValue
		? booksState.books.filter((book) => {
			return book.title.toLowerCase().includes(searchValue.toLowerCase())
		}) : booksState.books

	return (
		<div className="container">
			<Logo />
			<Subtitle>A maior biblioteca eletrônica do mundo</Subtitle>
			<SearchInput value={searchValue} handleChange={handleChange}></SearchInput>
			<div className="books-cards">
				{!!booksState.books && filteredBooksList.map((book) => {
						return <BooksCard
							onClick={() => openBookPage(book)}	
							key={book.ISBN}
							imgSrc={book.image}
							title={book.title}
						/>
					})
				}
				{
					booksState.isLoading && ( <Loader /> )
				}
			</div>
		</div>
	);
}

export default Home;
