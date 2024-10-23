import Footer from "@/Layout/Footer/Footer";
import Navbar from "@/Layout/Navbar/Navbar";
import "@/styles/globals.css";
import axios from "axios";
import Head from "next/head";
import { createContext, useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";

export const AlumniContext = createContext();

export default function App({ Component, pageProps }) {
  const [partner, setPartner] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}/alumni`)
      .then((res) => {
        setPartner(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <AlumniContext.Provider
      value={{
        partner,
        setPartner,
      }}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/ulm.png" />
        <title>ULM Alumni Directory</title>
        <meta name="description" content="ULM Alumni Search Directory" />
        <link rel="apple-touch-icon" href="/images/ulm.png" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Toaster
        position="bottom-right"
        gutter={12}
        containerStyle={{
          margin: "8px",
        }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </AlumniContext.Provider>
  );
}
