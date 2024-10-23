import React from "react";
import styles from "./CenterContainer.module.css";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

function CenterContainer({ partner }) {
  return (
    <div className={styles.center_container}>
      <div className={styles.center_container_upper}>
        {partner.name_of_business && partner?.business_description && (
          <>
            <p className={styles.title}>{partner?.name_of_business}</p>
            <p className={styles.desc}>{partner?.business_description}</p>
          </>
        )}
        <div>
          <p className={styles.service_title}>Contact information</p>
          <p className={styles.service_desc}>{partner?.business_address}</p>
          {partner?.business_city &&
            partner?.business_state &&
            partner?.business_zip && (
              <p className={styles.service_desc}>
                {partner.business_city}, {partner.business_state}{" "}
                {partner.business_zip}
              </p>
            )}
          {partner?.business_email && (
            <a
              href={`mailto:${partner.business_email}`}
              className={styles.service_desc}
            >
              <HiOutlineMail /> {partner.business_email}
            </a>
          )}
          {partner?.business_phone && (
            <a
              href={`tel:${partner.business_phone}`}
              className={styles.service_desc}
            >
              <HiOutlinePhone /> +1 {partner.business_phone}
            </a>
          )}
          <a
            href={"https://" + partner?.business_website}
            target="_blank"
            className={styles.service_desc}
            style={{
              color: "#007bff",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            {partner?.business_website}
          </a>
        </div>
      </div>
    </div>
  );
}

export default CenterContainer;
