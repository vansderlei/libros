import axios from "axios";

const booksApi = axios.create({
    baseURL: 'https://private-anon-e6288e1562-bookstore.apiary-mock.com/data',
});

export default booksApi;
