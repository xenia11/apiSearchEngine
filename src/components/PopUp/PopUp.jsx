import { useState, useEffect } from "react";
import styles from "./PopUp.module.scss";
import closeIcon from "../../assets/x-button.png";

const PopUp = ({ card, handleHidden }) => {
    const {
        volumeInfo: { description, pageCount, contentVersion },
    } = card;
    const hidePop = () => {
        handleHidden(false);
    };

    const spanStyles = {
        fontWeight: "bold",
        marginRight: "5px",
    };
    return (
        <>
            <div className={styles.PopUp}>
                <div className={`${styles.PopUp} ${styles.PopUp_ChildDiv}`}>
                    <img
                        onClick={hidePop}
                        className={`${styles.PopUp} ${styles.PopUp_ChildDiv} ${styles["PopUp_ChildDiv-Btn"]}`}
                        src={closeIcon}
                    ></img>
                </div>
                <p className={`${styles.PopUp} ${styles.PopUp_Para}`}>
                    <span style={spanStyles}>Description: </span>
                    {description ?? "No book description available"}
                </p>
                <p className={`${styles.PopUp} ${styles.PopUp_Para}`}>
                    <span style={spanStyles}>Version: </span>
                    {contentVersion ?? ""}
                </p>
                <p className={`${styles.PopUp} ${styles.PopUp_Para}`}>
                    <span style={spanStyles}>Pages:</span> {pageCount ?? ""}
                </p>
            </div>
        </>
    );
};

export default PopUp;
