import { useState } from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ onSubmit }) => {
    const [search, setSearch] = useState("");

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(search);
    };

    return (
        <form className={styles.SearchBar} onSubmit={handleSubmit}>
            <input
                className={`${styles.SearchBar} ${styles.SearchBar_Input}`}
                value={search}
                onChange={handleChange}
                type="text"
                id="searchInput"
                name="search"
                placeholder="Search book title"
            ></input>

            <input
                className={`${styles.SearchBar} ${styles.SearchBar_Btn}`}
                type="submit"
                value="Search"
            ></input>
        </form>
    );
};

export default SearchBar;
