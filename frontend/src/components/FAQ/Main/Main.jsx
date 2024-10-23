import React from "react";
import styles from "./Main.module.css";

import Link from "next/link";
import Dropdown from "@/UI/Dropdown/Dropdown";
import Left from "@/UI/Svg/Left";
import Right from "@/UI/Svg/Right";

function Main({ faqs }) {
  return (
    <div className={styles.faq_main}>
      {" "}
      {/* Replaced "className" with "className={styles.faq_main}" */}
      <Left />
      <Right />
      <div className={styles.faq_main_container}>
        {" "}
        {/* Replaced "className" with "className={styles.faq_main_container}" */}
        <div className={styles.heading}>
          {" "}
          {/* Replaced "className" with "className={styles.heading}" */}
          <p className={styles.title}>Frequently Asked Questions.</p>{" "}
          {/* Replaced "className" with "className={styles.title}" */}
          <p className={styles.desc}>
            {" "}
            {/* Replaced "className" with "className={styles.desc}" */}
            Quick answers to the questions you may have. Don’t find what you are
            looking for? Feel free to <Link href="/contact">contact us</Link>.
          </p>
        </div>
        <div className={styles.contents}>
          {faqs?.map((item, i) => {
            return <Dropdown key={i} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;
