import React, { useState } from "react";
import styles from "./TopContainer.module.css";
import { BsShare } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import toast from "react-hot-toast";

function TopContainer({ partner }) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  return (
    <div className={styles.profile_top_heading}>
      <div className={styles.profile_top_heading_container}>
        <div className={styles.profile_top_logo}>
          <div>
            <img src={partner?.logo} alt="logo" />
          </div>
        </div>
        <div className={styles.profile_top_content}>
          <div className={styles.profile_top_content_upper}>
            <div>
              <h2>{partner?.name}</h2>
              <a
                href="mailto:alumni@ulm.edu"
                onMouseEnter={() => {
                  setIsMouseOver(true);
                }}
                onMouseLeave={() => {
                  setIsMouseOver(false);
                }}
              >
                <HiOutlineMail />
              </a>
              {isMouseOver && <p className={styles.bubble}>Send an Email</p>}
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  `https://itcodechallenge-ranjan.vercel.app/profile/${partner?._id}`
                );
                toast.success("Link copied to clipboard");
              }}
            >
              <BsShare />
              Share
            </button>
          </div>
          <div className={styles.profile_top_content_lower}>
            <h5>{partner?.job_title}</h5>
            <p>{partner?.name_of_business}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopContainer;
