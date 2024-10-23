import React from "react";
import { motion } from "framer-motion";

import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.about_hero}>
      <div className={styles.about_hero_container}>
        <motion.p
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={styles.about_hero_text}
        >
          About Us
        </motion.p>
        <motion.h3
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.about_hero_title}
        >
          ULM Alumni Directory: Connecting Warhawks Across the Globe
        </motion.h3>
        <motion.p
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className={styles.about_hero_desc}
        >
          Empowering ULM alumni to expand their networks and explore
          opportunities worldwide.
        </motion.p>
      </div>
    </div>
  );
}

export default Hero;
