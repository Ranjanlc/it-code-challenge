import React, { useState } from "react";
import styles from "./Card.module.css";
import { FaArrowRight } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { motion } from "framer-motion";
import Link from "next/link";
import ConfirmDialog from "../../pages/admin/ConfirmDialog/ConfirmDialog";

function Card({ admin, partner }) {
  const [openOption, setOpenOption] = useState(false);
  const [dialog, setDialog] = useState({
    isOpen: false,
    _id: "",
    deleted: false,
  });
  return (
    <>
      <Link
        href={admin ? "#" : `/profile/${partner._id}`}
        onClick={(e) => {
          if (admin) {
            e.preventDefault();
          }
        }}
      >
        {dialog.isOpen ? (
          <ConfirmDialog
            caller="alumni"
            dialog={dialog}
            setDialog={setDialog}
          />
        ) : null}
        <motion.div
          whileInView={{ x: [100, 50, 0], opacity: [0, 0, 1] }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, type: "tween" }}
          viewport={{ once: true }}
          className={styles.card}
        >
          <div className={styles.img_container}>
            <img src={`${partner?.logo}`} alt="partner" />
          </div>
          <div className={styles.card_content}>
            {" "}
            {/* Replace className="card_content" with className={styles.card_content} */}
            <div
              className={styles.card_name}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                gap: "10px",
                position: "relative",
              }}
            >
              <p className={styles.card_title}>{partner?.name}</p>
              {admin ? (
                <>
                  {" "}
                  <HiDotsVertical
                    onClick={() => {
                      setOpenOption(!openOption);
                      dialog.deleted &&
                        setDialog({ ...dialog, deleted: false });
                    }}
                    style={{ marginRight: "-20px", cursor: "pointer" }}
                  />
                  {openOption && !dialog.deleted ? (
                    <div className={styles.adminOption}>
                      {" "}
                      {/* Replace className="adminOption" with className={styles.adminOption} */}
                      <Link href={`/admin/add-partner/${partner?._id}`}>
                        Edit
                      </Link>
                      <button
                        onClick={() => {
                          setDialog({ isOpen: true, _id: partner._id });
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  ) : null}{" "}
                </>
              ) : null}
            </div>
            <p className={styles.card_desc}>{partner?.job_title}</p>{" "}
            <p className={`${styles.card_desc} ${styles.company}`}>
              {partner?.name_of_business}
            </p>{" "}
            {/* Replace className="card_desc" with className={styles.card_desc} */}
            <div className={styles.card_link}>
              {" "}
              {/* Replace className="card_link" with className={styles.card_link} */}
              <Link href={`/profile/${partner._id}`}>
                Learn More <FaArrowRight />
              </Link>
            </div>
          </div>
        </motion.div>
      </Link>
    </>
  );
}

export default Card;
