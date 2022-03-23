import React, {useEffect, useState} from 'react';
import './styles.css';
import Logo from "../../components/logo"
import Subtitle from "../../components/subtitle"
import SearchInput from '../../components/searchInput';
import BooksCard from "../../components/bookCard"
import booksApi from '../../api/books';

function Home() {
	const [searchValue, setSearchValue] = useState('')
	const [booksList, setBooksList] = useState([])

	async function getBooks (){
		const {data: booksData} = await booksApi.get("/books")
		setBooksList(booksData)
		console.log("GET books: ", booksData)
	}

	useEffect(() =>{
		getBooks()
	}, [])

	return (
		<div className="container">
			<Logo />
			<Subtitle>A maior biblioteca eletrônica do mundo</Subtitle>
			<SearchInput value={searchValue}></SearchInput>
			<div className="books-cards">
				{booksList.map((book) => {
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
