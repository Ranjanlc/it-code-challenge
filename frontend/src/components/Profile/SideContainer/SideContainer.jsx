import React from "react";
import styles from "./SideContainer.module.css";
import Link from "next/link";

function SideContainer({ partner, similarProfiles }) {
  console.log(similarProfiles);
  return (
    <div className={styles.side_container}>
      {partner.business_category && (
        <div className={styles.side_container_tags}>
          <div className={styles.side_container_tag_title}>
            <p>Business Category</p>
          </div>
          <div className={styles.side_container_tag_collection}>
            <div className={styles.side_container_tag}>
              <p>{partner.business_category}</p>
            </div>
          </div>
        </div>
      )}
      <div className={styles.side_container_similar}>
        <div className={styles.side_container_tag_title}>
          <p>Alumni</p>
        </div>
        <div className={styles.side_container_similar_contents}>
          <div className={styles.similar_profile}>
            <div className={styles.similar_profile_content}>
              <div>
                <p className={styles.title}>Alumni Discount</p>
                <p className={styles.tag}>
                  {partner.alumni_discount === "Yes"
                    ? partner.alumni_discount_description
                    : partner.alumni_discount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideContainer;
