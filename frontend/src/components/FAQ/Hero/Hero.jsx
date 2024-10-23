import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

import styles from "./Hero.module.css";

function Hero({ setSearchTerm, searchTerm }) {
  const [input, setInput] = useState(searchTerm);
  useEffect(() => {
    setInput(searchTerm);
  }, [searchTerm]);
  return (
    <div className={styles.faq_hero}>
      {" "}
      <div className={styles.faq_hero_container}>
        <div className={styles.top}>
          <p className={styles.title}>FAQs</p>{" "}
          <p className={styles.heading}>You've got questions?</p>
          <p className={styles.heading}>We’ve got answers!</p>{" "}
          <p className={styles.desc}>
            Everything you need to know about the ULM Alumni Search Directory.
          </p>
        </div>
        <form
          className={styles.bottom}
          onSubmit={(e) => {
            e.preventDefault();
            setSearchTerm(e.target.search.value);
          }}
        >
          <BiSearch />
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type="text"
            name="search"
            placeholder="Search"
          />
          <AiOutlineClose
            className={`${styles.close} ${
              searchTerm !== "" ? styles.active : ""
            }`}
            onClick={() => {
              setSearchTerm("");
              setInput("");
            }}
          />
        </form>
      </div>
    </div>
  );
}

export default Hero;
