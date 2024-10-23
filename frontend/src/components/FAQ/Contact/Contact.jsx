import React from "react";
import styles from "./Contact.module.css";

import Link from "next/link";
import MotionWrap from "@/wrapper/MotionWrapper";

function Contact() {
  return (
    <div className={styles.faq_contact}>
      {" "}
      {/* Replaced "className" with "className={styles.faq_contact}" */}
      <div className={styles.faq_contact_container}>
        {" "}
        {/* Replaced "className" with "className={styles.faq_contact_container}" */}
        <div className={styles.upper}>
          {" "}
          {/* Replaced "className" with "className={styles.upper}" */}
          <div className={styles.images}>
            {" "}
            {/* Replaced "className" with "className={styles.images}" */}
            <img
              src="/images/person.jpeg"
              alt="person"
              className={styles.image1}
            />{" "}
            {/* Replaced "className" with "className={styles.image1}" */}
            <img
              src="/images/person2.jpeg"
              alt="person"
              className={styles.image2}
            />{" "}
            {/* Replaced "className" with "className={styles.image2}" */}
            <img
              src="/images/person3.jpeg"
              alt="person"
              className={styles.image3}
            />{" "}
            {/* Replaced "className" with "className={styles.image3}" */}
          </div>
          <div className={styles.text}>
            {" "}
            {/* Replaced "className" with "className={styles.text}" */}
            <p className={styles.title}>Still have Questions?</p>{" "}
            {/* Replaced "className" with "className={styles.title}" */}
            <p className={styles.desc}>
              {" "}
              {/* Replaced "className" with "className={styles.desc}" */}
              Can’t find the answer you’re looking for? Chat with our friendly
              team
            </p>
          </div>
        </div>{" "}
        {/* Replaced "className" with "className={styles.button}" */}
        <Link href="/contact" className={styles.button}>
          {" "}
          {/* Replaced "className" with "className={styles.btn}" */}
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default MotionWrap(Contact, "contact");
