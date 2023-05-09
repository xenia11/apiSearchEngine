import { useState, useEffect, useRef } from "react";
import styles from "./PopUp.module.scss";
import closeIcon from "../../assets/x-button.png";

const PopUp = ({ handleHidden, bookInfo, children }) => {
    const popupRef = useRef(null);

    const hidePop = () => {
        handleHidden(false);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                hidePop();
            }
        };

        const handleMouseDown = (e) => {
            if (!popupRef.current.contains(e.target)) {
                hidePop();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("mousedown", handleMouseDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("mousedown", handleMouseDown);
        };
    }, [handleHidden]);
    return (
        <>
            {" "}
            <div className={styles.PopUp} ref={popupRef}>
                <div className={`${styles.PopUp} ${styles.PopUp_ChildDiv}`}>
                    <img
                        onClick={hidePop}
                        className={`${styles.PopUp} ${styles.PopUp_ChildDiv} ${styles["PopUp_ChildDiv-Btn"]}`}
                        src={closeIcon}
                        alt="Close"
                    />
                </div>
                {children}
            </div>
        </>
    );
};

export default PopUp;
