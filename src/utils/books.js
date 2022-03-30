import booksApi from '../api/books';

export default async function getBooks() {
    const { data: booksData } = await booksApi.get("/books")
    return booksData
}