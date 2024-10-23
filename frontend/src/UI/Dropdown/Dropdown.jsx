import React, { useRef, useState } from "react";
import { FaCalendarDay } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import styles from "./Dropdown.module.css";
function Dropdown({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentEl = useRef(null);

  return (
    <div className={styles.item}>
      {" "}
      {/* Replaced "className" with "className={styles.item}" */}
      <div className={styles.icon}>
        {" "}
        {/* Replaced "className" with "className={styles.icon}" */}
        <FaCalendarDay />
      </div>
      <div className={styles.text}>
        {" "}
        {/* Replaced "className" with "className={styles.text}" */}
        <p
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={styles.question}
        >
          {item.question}{" "}
        </p>{" "}
        {/* Replaced "className" with "className={styles.question}" */}
        <p
          ref={contentEl}
          className={styles.answer}
          style={
            isOpen
              ? { height: contentEl.current.scrollHeight }
              : { height: "0px" }
          }
        >
          {" "}
          {/* Replaced "className" with "className={styles.answer}" */}
          {item.answer}
        </p>
        <AiFillCaretDown
          className={`${styles.dropdown_icon} ${isOpen ? styles.rotate : ""}`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />{" "}
        {/* Replaced "className" with "className={`${styles.dropdown_icon} ${isOpen ? styles.rotate : ''}`" */}
      </div>
    </div>
  );
}

export default Dropdown;
