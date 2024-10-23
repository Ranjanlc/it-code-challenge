import { useEffect, useRef, useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
} from "react-icons/ai";
function Login() {
  const [showPw, setShowPw] = useState(false);
  const emailInputRef = useRef();
  const pwInputRef = useRef();
  const pwClickHandler = () => {
    setShowPw((showPw) => !showPw);
  };
  const navigate = useRouter();
  useEffect(() => {
    const data = localStorage.getItem("alumni-token");
    data && navigate.replace("/admin/add");
  }, [navigate]);
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const body = {
      email: emailInputRef.current.value,
      password: pwInputRef.current.value,
    };
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/login`,
        body
      );
      data?.token && localStorage.setItem("alumni-token", data.token);
      toast.success("Login successful");
      navigate.replace("/admin/add");
    } catch (err) {
      toast.error("Sorry, you are not authorized");
    }
  };
  return (
    <main className={styles.container}>
      <form className={styles.form_container} onSubmit={formSubmitHandler}>
        <div className={styles.title_container}>
          <p className={styles.title}>Login</p>
          <span className={styles.subtitle}>
            Get started with the admin panel where you can add or remove the
            alumnis and their businesses.
          </span>
        </div>
        <br />
        <div className={styles.input_container}>
          <label className={styles.input_label} htmlFor="email_field">
            Email
          </label>
          <AiOutlineMail className={styles.icon} />
          <input
            placeholder="name@mail.com"
            title="Inpit title"
            name="input-name"
            type="text"
            ref={emailInputRef}
            className={styles.input_field}
            id="email_field"
          />
        </div>
        <div className={styles.input_container}>
          <label className={styles.input_label} htmlFor="password_field">
            Password
          </label>
          {!showPw && (
            <AiOutlineEye className={styles.icon} onClick={pwClickHandler} />
          )}
          {showPw && (
            <AiOutlineEyeInvisible
              className={styles.icon}
              onClick={pwClickHandler}
            />
          )}
          <input
            placeholder="Password"
            title="Inpit title"
            name="input-name"
            ref={pwInputRef}
            type={showPw ? "text" : "password"}
            className={styles.input_field}
            id="password_field"
          />
        </div>
        <button title="Sign In" type="submit" className={styles["sign-in_btn"]}>
          <span>Sign In</span>
        </button>
      </form>
    </main>
  );
}

export default Login;
