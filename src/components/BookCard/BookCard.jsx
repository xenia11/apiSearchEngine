import { useState, useEffect } from "react";
import styles from "./BookCard.module.scss";
import bookPic from "../../assets/book-photo.jpg";

export const BookCard = ({ bookInfo, handleClick }) => {
    const {
        volumeInfo: {
            imageLinks,
            categories,
            title,
            authors,
            publishedDate,
            publisher,
        },
    } = bookInfo;

    const bookCategories = () => {
        if (categories && categories[0]?.includes(",")) {
            const categoriesArr = categories[0].split(",");

            return categoriesArr.map((category) => (
                <p
                    key={category}
                    className={`${styles.Card} ${styles.Card_SecondHalf} ${styles["Card_SecondHalf-CategoryDiv"]} ${styles["Card_SecondHalf-CategoryDiv-Para"]}`}
                >
                    {category}
                </p>
            ));
        }
        return (
            <p
                className={`${styles.Card} ${styles.Card_SecondHalf} ${styles["Card_SecondHalf-CategoryDiv"]} ${styles["Card_SecondHalf-CategoryDiv-Para"]}`}
            >
                {categories && categories[0]}
                {!categories && "Book"}
            </p>
        );
    };

    const [click, setClick] = useState(false);

    const clicked = () => {
        handleClick(bookInfo);
        setClick(!click);
    };

    return (
        <div className={styles.Card}>
            <div className={`${styles.Card} ${styles.Card_FirstHalf}`}>
                <img
                    className={`${styles.Card} ${styles.Card_FirstHalf} ${styles["Card_FirstHalf-Img"]}`}
                    src={imageLinks?.smallThumbnail ?? bookPic}
                    alt={title ?? "book image"}
                ></img>
            </div>
            <div className={`${styles.Card} ${styles.Card_SecondHalf}`}>
                <h1
                    className={`${styles.Card} ${styles.Card_SecondHalf} ${styles["Card_SecondHalf-Title"]}`}
                >
                    {title ?? "No title"}
                </h1>
                <p
                    className={`${styles.Card} ${styles.Card_SecondHalf} ${styles["Card_SecondHalf-ParaAuthor"]}`}
                >
                    {authors ?? "Author Unknown"}
                </p>
                <p
                    className={`${styles.Card} ${styles.Card_SecondHalf} ${styles["Card_SecondHalf-ParaPublisher"]}`}
                >
                    {publisher
                        ? `${publishedDate} — ${publisher}`
                        : `${publishedDate}`}
                </p>
                <button
                    className={`${styles.Card} ${styles.Card_SecondHalf} ${styles["Card_SecondHalf-Button"]}`}
                    onClick={clicked}
                >
                    More Info
                </button>
                <div
                    className={`${styles.Card} ${styles.Card_SecondHalf} ${styles["Card_SecondHalf-CategoryDiv"]}`}
                >
                    {bookCategories()}
                </div>
            </div>
        </div>
    );
};

export default BookCard;
