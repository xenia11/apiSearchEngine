import React, { useEffect, useState } from "react";
import BookList from "../BookList/BookList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getBooksBySearch } from "../../services/book-services";
import Loading from "../../components/Loading/Loading";

const LoadBooks = () => {
    const [search, setSearch] = useState("love");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearchSubmit = (newSearch) => {
        setSearch(newSearch);
    };

    useEffect(() => {
        setLoading(true);
        setBooks([]);
        setError(null);

        getBooksBySearch(search)
            .then((books) => setBooks(books))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [search]);

    return (
        <div>
            <SearchBar onSubmit={handleSearchSubmit} />
            {loading && <Loading />}
            {!loading && error && <p>{error.message}</p>}
            {!loading && books.length > 0 && <BookList books={books} />}
        </div>
    );
};

export default LoadBooks;
