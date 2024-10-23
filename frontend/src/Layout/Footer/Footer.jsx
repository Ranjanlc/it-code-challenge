import React from "react";
import styles from "./Footer.module.css";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import MotionWrap from "../../wrapper/MotionWrapper";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div id={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_content}>
          <div className={styles.footer_about}>
            <p className={styles.footer_title}>ULM Alumni Directory</p>
            <div className={styles.footer_desc}>
              <p>Discover new opportunities and stay connected.</p>
              <p>Let's build a stronger alumni network together.</p>
            </div>
            <div className={styles.social_links}>
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
            </div>
          </div>
          <div className={styles.footer_company}>
            <p className={styles.footer_content_title}>Directory</p>
            <Link href="/aboutus">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className={styles.footer_support}>
            <p className={styles.footer_content_title}>Support</p>
            <Link href="/FAQs">FAQs</Link>
          </div>
          <div className={styles.footer_contact}>
            <p className={styles.footer_content_title}>Contact us</p>
            <a href="mailto:alumni@ulm.edu">
              <HiOutlineMail /> alumni@ulm.edu
            </a>
            <a href="tel:+13183421000">
              <HiOutlinePhone /> +1 (318) 342-1000
            </a>
            <a href="https://maps.app.goo.gl/DSW3KVRA9jCyHH9Q6" target="_blank">
              <HiOutlineLocationMarker /> Monroe,LA 71209
            </a>
          </div>
        </div>
        <span className={styles.stLine}></span>
        <div className={styles.footer_info}>
          <div className={styles.copyright}>
            <p>&#169; 2024 ULM Alumni Directory - All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MotionWrap(Footer, "footer");
