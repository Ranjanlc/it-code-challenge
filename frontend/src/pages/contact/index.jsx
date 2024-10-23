import React from "react";
import styles from "./Contact.module.css";
import Email from "../../components/Contact/Email/Email";
import Detail from "../../components/Contact/Details/Detail";
import { generateHeadContent } from "..";

function Contact() {
  return (
    <>
      {/* For SEO purposes */}
      {generateHeadContent(
        "ULM Alumni Directory Contact Page",
        "University of Louisiana Monroe Alumni Directory Contact Us"
      )}
      <div className={styles.contact}>
        <div className={styles.contact_container}>
          <Email />
          <Detail />
        </div>
      </div>
    </>
  );
}

export default Contact;
