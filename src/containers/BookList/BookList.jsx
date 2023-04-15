import { useState, useEffect } from "react";
import BookCard from "../../components/BookCard/BookCard";
import PopUp from "../../components/PopUp/PopUp";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./BookList.module.scss";

const BookList = ({ books }) => {
    const [cardClicked, setCardClick] = useState(false);
    const [isPopHidden, setPopHidden] = useState(true);
    const [openCard, setCardOpen] = useState("");

    const handleClick = (click, book) => {
        setCardClick(click);
        setCardOpen(book);
        setPopHidden(false);
    };

    const hidePop = () => {
        setPopHidden(true);
        setCardClick(false);
    };

    return (
        <div>
            <div className={styles.BookList}>
                {books.map((book) => (
                    <BookCard
                        key={book.id}
                        bookInfo={book}
                        handleClick={handleClick}
                    />
                ))}
            </div>
            {!isPopHidden && <PopUp card={openCard} handleHidden={hidePop} />}
        </div>
    );
};

export default BookList;
