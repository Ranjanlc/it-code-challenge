import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import styles from "./Frame.module.css";

function Frame() {
  const [isOpen, setIsOpen] = useState(false);
  const contentEl = useRef(null);
  return (
    <div className={styles.about_frame}>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={styles.about_frame_container}
      >
        <img src="/images/frame.jpg" alt="frame" className={styles.image} />
        <div className={styles.content}>
          <p className={styles.title}>About ULM Alumni Directory</p>
          <p className={styles.desc}>
            At the ULM Alumni Directory, we recognize the value of connecting
            current students with a thriving alumni community. Our mission is to
            create a dynamic platform that brings together alumni and students,
            fostering collaboration, mentorship, and growth through shared
            experiences and networks.
          </p>
          <p
            ref={contentEl}
            className={`${styles.desc} ${styles.readmore}`}
            style={
              isOpen
                ? { height: contentEl.current.scrollHeight }
                : { height: "0px" }
            }
          >
            The University of Louisiana Monroe has produced a vast network of
            alumni excelling in various industries across the globe. By
            leveraging this network, current ULM students can access invaluable
            resources, seek career guidance, and benefit from exclusive
            opportunities. Whether you’re an alum looking to reconnect or a
            student seeking mentorship, the directory offers a space for
            meaningful interactions, personal development, and professional
            advancement. Our platform bridges the gap between past and present
            Warhawks, empowering both students and alumni to build lasting
            relationships, explore career opportunities, and contribute to the
            continued success of the ULM community. By fostering this supportive
            environment, we aim to help everyone in the ULM family succeed,
            creating a stronger, more connected university network.
          </p>
          <p
            className={styles.button}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? "Read less" : "Read more"}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Frame;
