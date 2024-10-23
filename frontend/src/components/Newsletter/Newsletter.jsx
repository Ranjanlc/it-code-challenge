import React from "react";
import { motion } from "framer-motion";

import styles from "./Newsletter.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import MotionWrap from "@/wrapper/MotionWrapper";

function Newsletter() {
  const { pathname } = useRouter();
  return (
    <div id={styles.newsletter}>
      <div
        className={`${styles.newsletter_container} ${
          pathname === "/aboutus" || pathname === "/aboutus/review"
            ? styles.red
            : ""
        }`}
      >
        <motion.h2
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.newsletter_title}
        >
          Expand Your ULM Network
        </motion.h2>
        <motion.p
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.newsletter_desc}
        >
          Engage with fellow Warhawks and explore professional connections,
          services, and alumni perks.
        </motion.p>
        <Link href="/contact">
          <motion.button
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className={styles["primary-btn"]}
          >
            Contact Us
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

// export default Newsletter;
export default MotionWrap(Newsletter, "footer");
