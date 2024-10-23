import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const { pathname } = useRouter();
  const [linksIsOpen, setLinksIsOpen] = useState(false);
  return (
    <div className={styles.navbar}>
      <div
        className={`${styles.navbar_container} ${
          linksIsOpen ? styles.open : ""
        }`}
      >
        <div className={styles.navbar_overlay}></div>
        <Link href="/">
          <img src="/images/ulm.png" alt="logo" />
        </Link>
        <div className={styles.links_wrapper}>
          <ul className={styles.navbar_links}>
            <li
              className={`${styles.mobile} ${
                pathname === "/aboutus" || pathname === "/aboutus/review"
                  ? styles.active
                  : ""
              }`}
            >
              <Link href="/aboutus">About</Link>
            </li>
            <li
              className={`${styles.mobile} ${
                pathname === "/alumni" ? styles.active : ""
              }`}
            >
              <Link href="/alumni">Alumni</Link>
            </li>
            <li
              className={`${styles.mobile} ${
                pathname === "/FAQs" ? styles.active : ""
              }`}
            >
              <Link href="/FAQs">FAQs</Link>
            </li>
            <li
              className={`${styles.mobile} ${
                pathname.startsWith("/admin") ? styles.active : ""
              }`}
            >
              <Link href="/admin/login">Admin</Link>
            </li>
          </ul>
          <FaBars
            className={`${styles.navbar_icon} ${styles.bars}`}
            onClick={() => setLinksIsOpen(true)}
          />
          <ul
            className={`${styles.toggle_navbar} ${
              linksIsOpen ? styles.active : ""
            }`}
            onClick={() => {
              if (linksIsOpen) {
                setLinksIsOpen(false);
              }
            }}
          >
            <div className={styles.close}>
              <AiOutlineClose
                className={styles.navbar_icon}
                onClick={() => {
                  setLinksIsOpen(false);
                }}
              />
            </div>
            <li className={`${pathname === "/" ? styles.active : ""}`}>
              <Link href="/">Home</Link>
            </li>
            <li
              className={`${styles.mobile} ${
                pathname === "/aboutus" ? styles.active : ""
              }`}
            >
              <Link href="/aboutus">About</Link>
            </li>
            <li
              className={`${styles.mobile} ${
                pathname === "/alumni" ? styles.active : ""
              }`}
            >
              <Link href="/alumni">Alumni</Link>
            </li>
            <li className={`${pathname === "/FAQs" ? styles.active : ""}`}>
              <Link href="/FAQs">FAQs</Link>
            </li>
            <li
              className={`${
                pathname.startsWith("/admin") ? styles.active : ""
              }`}
            >
              <Link href="/admin/login">Admin</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
