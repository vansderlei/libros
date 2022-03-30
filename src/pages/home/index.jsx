import React, {useCallback, useEffect, useState} from 'react';
import './styles.css';
import Logo from "../../components/logo"
import Subtitle from "../../components/subtitle"
import SearchInput from '../../components/searchInput';
import BooksCard from "../../components/bookCard"
import getBooks from "../../utils/books"

function Home() {
	const [searchValue, setSearchValue] = useState('')
	const [booksList, setBooksList] = useState([])

	const handleChange = (e) => {
		const { value } = e.target;
		setSearchValue(value);
	};

	const filteredBooksList = searchValue
		? booksList.filter((book) => {
			return book.title.toLowerCase().includes(searchValue.toLowerCase())
		}) : booksList

	const handleBooksList = useCallback(async () => setBooksList(await getBooks()),[])
	useEffect(() => {
		handleBooksList()
	}, [handleBooksList])

	return (
		<div className="container">
			<Logo />
			<Subtitle>A maior biblioteca eletrônica do mundo</Subtitle>
			<SearchInput value={searchValue} handleChange={handleChange}></SearchInput>
			<div className="books-cards">
				{filteredBooksList.map((book) => {
					return <BooksCard
						key={book.ISBN}
						imgSrc={book.image}
						title={book.title}
					/>
				})}
			</div>
		</div>
	);
}

export default Home;
