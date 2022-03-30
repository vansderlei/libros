import React, {useCallback, useEffect, useState} from 'react';
import './styles.css';
import Logo from "../../components/logo"
import Loader from "../../components/loaders/loader"
import Subtitle from "../../components/subtitle"
import SearchInput from '../../components/searchInput';
import BooksCard from "../../components/bookCard"
import getBooks from "../../utils/books"
import { useHistory } from "react-router-dom";

function Home() {
	document.title = `Libros`
	const [searchValue, setSearchValue] = useState('')
	const [booksList, setBooksList] = useState([])
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
		? booksList.filter((book) => {
			return book.title.toLowerCase().includes(searchValue.toLowerCase())
		}) : booksList

	const handleBooksList = useCallback(async () => setBooksList(await getBooks()),[])
	useEffect(() => {
		localStorage.removeItem("selectedBook")
		handleBooksList()
	}, [handleBooksList])

	return (
		<div className="container">
			<Logo />
			<Subtitle>A maior biblioteca eletrônica do mundo</Subtitle>
			<SearchInput value={searchValue} handleChange={handleChange}></SearchInput>
			<div className="books-cards">
				{!!booksList && filteredBooksList.map((book) => {
					return <BooksCard
						onClick={() => openBookPage(book)}	
						key={book.ISBN}
						imgSrc={book.image}
						title={book.title}
					/>
				})}
				{!booksList.length > 0 && <Loader />}
			</div>
		</div>
	);
}

export default Home;
