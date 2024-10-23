import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import styles from "./Heroslider.module.css";

function Heroslider({ heroContents }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dotClicked, setDotClicked] = useState(false);
  // const handleInterval = () => {
  //   console.log(dotClicked);
  // };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((index) => (index !== 3 ? ++index : 0));
    }, 3000);
    if (dotClicked) {
      setDotClicked(false);
      return clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [dotClicked]);

  return (
    <div className={styles.hero_slider}>
      {/* Extra div just to maintain design consistency */}
      <div>
        <motion.p
          whileInView={{ x: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className={styles.hero_content}
        >
          {heroContents[currentIndex].header1}
        </motion.p>
        <motion.h2
          whileInView={{ x: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className={styles.hero_content}
        >
          {heroContents[currentIndex].header2}
        </motion.h2>
      </div>
      <motion.div
        whileInView={{ x: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className={styles.dot_container}
      >
        {heroContents.map((_, i) => {
          return (
            <div
              className={`${styles.dot} ${
                currentIndex === i ? styles.active : ""
              }`}
              key={i}
              onClick={() => {
                setCurrentIndex(i);
                setDotClicked(true);
              }}
            ></div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Heroslider;
