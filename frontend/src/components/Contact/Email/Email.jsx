import React, { useState } from "react";
import { motion } from "framer-motion";

import styles from "./Email.module.css";
import Dropdown from "../../../UI/Dropdown/Dropdown";

import axios from "axios";
import toast from "react-hot-toast";

function Email() {
  const [isLoading, setIsLoading] = useState(false);

  const [userEntry, setUserEntry] = useState({
    full_name: "",
    email: "",
    phone_no: "",
    message: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUserEntry({ ...userEntry, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      fullName: userEntry.full_name,
      emailAddress: userEntry.email,
      phoneNumber: userEntry.phone_no,
      message: userEntry.message,
    };
    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_API}/contact`, data)
      .then((res) => {
        toast.success("Message sent successfully");
        setUserEntry({
          full_name: "",
          email: "",
          phone_no: "",
          message: "",
        });
      })
      .catch((err) => {
        toast.error("Something went wrong");
      });
    setIsLoading(false);
  };

  return (
    <motion.form
      whileInView={{ x: [-100, -50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={styles.contact_email}
      onSubmit={handleSubmit}
    >
      <div className={styles.inputs_flex}>
        <div className={styles.inputs}>
          <label htmlFor="full_name">Full Name</label>
          <input
            value={userEntry.full_name}
            onChange={handleChange}
            type="text"
            placeholder="Enter Your Full Name"
            name="full_name"
            required
          />
        </div>
        <div className={styles.inputs}>
          {" "}
          {/* Replaced "className" with "className={styles.inputs}" */}
          <label htmlFor="email">Email address</label>
          <input
            value={userEntry.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter Your Email address"
            name="email"
            required
          />
        </div>
      </div>
      <div className={styles.inputs_flex}>
        {" "}
        {/* Replaced "className" with "className={styles.inputs_flex}" */}
        <div className={styles.inputs}>
          {" "}
          {/* Replaced "className" with "className={styles.inputs}" */}
          <label htmlFor="phone_no">Phone Number</label>
          <input
            value={userEntry.phone_no}
            onChange={handleChange}
            type="text"
            placeholder="+000"
            name="phone_no"
          />
        </div>
      </div>
      <div className={styles.inputs}>
        <label htmlFor="message">Message</label>
        <textarea
          value={userEntry.message}
          onChange={handleChange}
          rows={8}
          type="text"
          placeholder="Hi! I would like to know more about..."
          name="message"
          required
        />
      </div>{" "}
      {/* Replaced "className" with "className={styles.submit_btn}" */}
      <button
        disabled={isLoading}
        className={styles["primary_btn"]}
        type="submit"
      >
        Submit
      </button>
    </motion.form>
  );
}

export default Email;
