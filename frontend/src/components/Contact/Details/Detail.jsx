import React from "react";
import { motion } from "framer-motion";

import { FaArrowRight } from "react-icons/fa";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

import styles from "./Detail.module.css";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

function Detail() {
  return (
    <div className={styles.contact_details}>
      <div className={styles.contact_details_lower}>
        <motion.h1
          whileInView={{ x: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Address
        </motion.h1>
        <motion.p
          whileInView={{ x: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.contact_details_desc}
        >
          Monroe, Louisiana 71209
        </motion.p>
        <motion.a
          whileInView={{ x: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          href="mailto:alumni@ulm.edu"
          className={styles.contact_details_icon}
        >
          <AiOutlineMail />
          Send an email
        </motion.a>
        <motion.a
          whileInView={{ x: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          href="tel:+13183421000"
          className={styles.contact_details_icon}
        >
          <BsTelephone />
          Make a phone call
        </motion.a>
      </div>
      <div className={styles.contact_details_social_links}>
        <motion.h1
          whileInView={{ x: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Social media
        </motion.h1>
        <motion.div
          whileInView={{ x: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a href="https://www.instagram.com/ulmonroe/" target="_blank">
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/universitylouisianamonroe"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a href="https://x.com/ULM_Official" target="_blank">
            <FaXTwitter />
          </a>
          <a
            href="https://www.linkedin.com/school/university-of-louisiana-monroe/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Detail;
