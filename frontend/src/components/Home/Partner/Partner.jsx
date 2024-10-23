import React, { useContext } from "react";
import { motion } from "framer-motion";

import styles from "./Partner.module.css";
import Card from "../../../UI/Card/Card";
import { AlumniContext } from "@/pages/_app";
import { useRouter } from "next/router";
import LoadingSpinner from "../../../UI/LoadingSpinner/LoadingSpinner";

const ITEMS_PER_PAGE = 6;

function Partner() {
  const { partner } = useContext(AlumniContext);
  console.log(partner);
  const navigate = useRouter();

  const handleViewMore = () => {
    navigate.push("/alumni");
  };

  return (
    <div className={styles.partner}>
      <div className={styles.partner_container}>
        <div className={styles.partner_header}>
          <motion.h4
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.partner_title}
          >
            Our Valuable Alumni
          </motion.h4>
          <motion.p
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.partner_desc}
          >
            These are the valuable alumni who have contributed to the growth of
            ULM Alumni Search Directory.
          </motion.p>
        </div>
        {partner.length === 0 && <LoadingSpinner />}
        {partner.length !== 0 && (
          <div className={`${styles.partner_cards} ${styles.home}`}>
            {partner?.slice(0, ITEMS_PER_PAGE).map((partner, i) => {
              return <Card partner={partner} key={i} />;
            })}
          </div>
        )}

        {partner.length !== 0 && (
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.partner_button}
          >
            <button
              className={styles["secondary-btn"]}
              onClick={handleViewMore}
            >
              View More
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Partner;
