import React from "react";
import { motion } from "framer-motion";

import styles from "./Hero.module.css";
import Heroslider from "../../../UI/Sliders/Heroslider";
import Link from "next/link";
import { HERO_CONTENTS } from "@/constants/DATA";

function Hero() {
  return (
    <div className={styles.home_hero}>
      <div className={styles.hero_container}>
        <Heroslider heroContents={HERO_CONTENTS} />
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.hero_buttons}
        >
          <Link href="/alumni">
            <button className={styles["sky_blue-btn"]}>Get Started</button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
