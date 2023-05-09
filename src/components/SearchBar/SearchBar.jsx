import { useRef } from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ onSubmit }) => {
    const searchRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(searchRef.current.value);
    };

    return (
        <form className={styles.SearchBar} onSubmit={handleSubmit}>
            <input
                className={`${styles.SearchBar} ${styles.SearchBar_Input}`}
                ref={searchRef}
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
