import React from "react";
import { motion } from "framer-motion";

import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.onboard_hero}>
      <div className={styles.onboard_hero_container}>
        <motion.h2
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={styles.onboard_title}
        >
          Our Valuable Alumni
        </motion.h2>
        <motion.p
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.onboard_desc}
        >
          These are the valuable alumni who have contributed to the growth of
          ULM Alumni Search Directory.
        </motion.p>
      </div>
    </div>
  );
}

export default Hero;
