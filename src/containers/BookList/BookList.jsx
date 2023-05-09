import { useState, useEffect } from "react";
import BookCard from "../../components/BookCard/BookCard";
import PopUp from "../../components/PopUp/PopUp";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./BookList.module.scss";
import closeIcon from "../../assets/x-button.png";

const BookList = ({ books }) => {
    const [isPopHidden, setPopHidden] = useState(true);
    const [openCard, setCardOpen] = useState("");

    const handleClick = (book) => {
        setCardOpen(book);
        setPopHidden(false);
    };

    const hidePop = () => {
        setPopHidden(true);
    };
    const spanStyles = {
        fontWeight: "bold",
        marginRight: "5px",
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
            {!isPopHidden && (
                <PopUp handleHidden={hidePop} bookInfo={openCard.volumeInfo}>
                    <p className={`${styles.PopUp} ${styles.PopUp_Para}`}>
                        <span style={spanStyles}>Description: </span>
                        {openCard?.volumeInfo?.description ??
                            "No book description available"}
                    </p>
                    <p className={`${styles.PopUp} ${styles.PopUp_Para}`}>
                        <span style={spanStyles}>Version: </span>
                        {openCard?.volumeInfo?.contentVersion ?? ""}
                    </p>
                    <p className={`${styles.PopUp} ${styles.PopUp_Para}`}>
                        <span style={spanStyles}>Pages:</span>{" "}
                        {openCard?.volumeInfo?.pageCount ?? ""}
                    </p>
                </PopUp>
            )}
        </div>
    );
};

export default BookList;
