import React from "react";
import styles from "/styles/Modalls.module.css";

export const Modalls = ({ children }) => {
  const arr = ["modal", "isOpen"];

  
  return (
    <article className={arr.join(" ")}>
      <div className={styles.modalContainer}>
        <button className={styles.modalClose}>X</button>
        {children}
      </div>
    </article>
  );
};
