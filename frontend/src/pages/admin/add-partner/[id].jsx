import React, { useContext, useEffect, useState } from "react";
import styles from "../add.module.css";
import { FiCamera } from "react-icons/fi";
import {
  AiOutlineMinus,
  AiFillCloseCircle,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { AlumniContext } from "@/pages/_app";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import {
  HiInformationCircle,
  HiOutlineInformationCircle,
} from "react-icons/hi";

function AddPartner() {
  const { partner } = useContext(AlumniContext);

  const router = useRouter();
  const { query } = router;
  const edit = query.id !== "1";
  useEffect(() => {
    const data = localStorage.getItem("alumni-token");
    !data && router.replace("/admin/login");
  }, [router]);

  const [isLoading, setIsLoading] = useState(false);

  const [partnerDetails, setPartnerDetails] = useState({
    name: "",
    email: "",
    business_address: "",
    job_title: "",
    name_of_business: "",
    business_city: "",
    business_state: "",
    business_zip: "",
    business_phone: "",
    business_website: "",
    business_email: "",
    business_description: "",
    business_category: "",
    alumni_discount_description: "",
  });

  useEffect(() => {
    console.log(query.id);
    if (query.id && query.id !== "1") {
      let active_partner = partner?.find((el) => el._id === query.id);
      console.log(active_partner);
      setPartnerDetails({
        name: active_partner?.name || "",
        email: active_partner?.email || "",
        business_address: active_partner?.business_address || "",
        job_title: active_partner?.job_title || "",
        name_of_business: active_partner?.name_of_business || "",
        business_city: active_partner?.business_city || "",
        business_state: active_partner?.business_state || "",
        business_zip: active_partner?.business_zip || "",
        business_phone: active_partner?.business_phone || "",
        business_website: active_partner?.business_website || "",
        business_email: active_partner?.business_email || "",
        business_description: active_partner?.business_description || "",
        business_category: active_partner?.business_category || "",
        alumni_discount_description:
          active_partner?.alumni_discount_description || "",
      });
    }
  }, [query, partner]);

  const handlePartnerDetailsChange = (e) => {
    let { name, value } = e.target;
    setPartnerDetails({ ...partnerDetails, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // setIsLoading(true);

    if (
      !partnerDetails.name ||
      !partnerDetails.email ||
      !partnerDetails.job_title
    ) {
      toast.error("Please fill in all personal details");
      return;
    }
    setIsLoading(true);
    // To infer alumni_discount and its description from user input
    const finalData = { ...partnerDetails };
    if (partnerDetails.alumni_discount_description === "") {
      finalData.alumni_discount = "No";
      finalData.alumni_discount_description = null;
    } else {
      finalData.alumni_discount = "Yes";
    }
    console.log(finalData);
    if (edit) {
      axios
        .put(
          `${process.env.NEXT_PUBLIC_BACKEND_API}/alumni/${query.id}`,
          partnerDetails,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("alumni-token")}`,
            },
          }
        )
        .then((res) => {
          setIsLoading(false);
          router.replace("/admin/add");
          toast.success("Successfully edited.Please refresh the page");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Sorry there occured a problem");
          setIsLoading(false);
        });
    } else {
      axios
        .post(`${process.env.NEXT_PUBLIC_BACKEND_API}/alumni`, finalData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("alumni-token")}`,
          },
        })
        .then((res) => {
          toast.success("Successfully added.Please refresh the page");
          router.replace("/admin/add");
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          toast.error("Sorry there occured a problem");
          setIsLoading(false);
        });
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleFormSubmit}
      disabled={isLoading}
    >
      <div className={styles.container}>
        <h1>{edit ? "Edit" : "Add"} Alumni</h1>
        <h2>Personal Details(Required):</h2>
        <div className={styles.row}>
          <div className={styles.inputs}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              value={partnerDetails.name}
              onChange={handlePartnerDetailsChange}
            />
          </div>
          <div className={styles.inputs}>
            <label htmlFor="short_des">Email</label>
            <input
              type="text"
              name="email"
              value={partnerDetails.email}
              onChange={handlePartnerDetailsChange}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.inputs}>
            <label htmlFor="job_title">Job Title</label>
            <input
              type="text"
              name="job_title"
              value={partnerDetails.job_title}
              onChange={handlePartnerDetailsChange}
            />
          </div>
        </div>
        <h2>Business Details:</h2>
        <div className={styles.row}>
          <div className={styles.inputs}>
            <label htmlFor="name_of_business"> Name</label>
            <input
              type="text"
              name="name_of_business"
              value={partnerDetails.name_of_business}
              onChange={handlePartnerDetailsChange}
            />
          </div>
          <div className={styles.inputs}>
            <label htmlFor="business_address"> Address</label>
            <input
              type="text"
              name="business_address"
              value={partnerDetails.business_address}
              onChange={handlePartnerDetailsChange}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.inputs}>
            <label htmlFor="business_city"> City</label>
            <input
              type="text"
              name="business_city"
              value={partnerDetails.business_city}
              onChange={handlePartnerDetailsChange}
            />
          </div>
          <div className={styles.inputs}>
            <label htmlFor="business_state">State</label>
            <input
              type="text"
              name="business_state"
              value={partnerDetails.business_state}
              onChange={handlePartnerDetailsChange}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.inputs}>
            <label htmlFor="business_zip"> Zip</label>
            <input
              type="number"
              name="business_zip"
              value={partnerDetails.business_zip}
              onChange={handlePartnerDetailsChange}
            />
          </div>
          <div className={styles.inputs}>
            <label htmlFor="business_phone"> Phone</label>
            <input
              type="text"
              name="business_phone"
              value={partnerDetails.business_phone}
              onChange={handlePartnerDetailsChange}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.inputs}>
            <label htmlFor="business_email"> Email</label>
            <input
              type="text"
              name="business_email"
              value={partnerDetails.business_email}
              onChange={handlePartnerDetailsChange}
            />
          </div>
          <div className={styles.inputs}>
            <label htmlFor="business_website">Website</label>
            <input
              type="text"
              name="business_website"
              value={partnerDetails.business_website}
              onChange={handlePartnerDetailsChange}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.inputs}>
            <label htmlFor="business_category">Business Category</label>
            <input
              type="text"
              name="business_category"
              value={partnerDetails.business_category}
              onChange={handlePartnerDetailsChange}
            />
          </div>
          <div className={styles.inputs}>
            <label htmlFor="business_description"> Description</label>
            <input
              type="text"
              name="business_description"
              value={partnerDetails.business_description}
              onChange={handlePartnerDetailsChange}
            />
          </div>
        </div>
        <span className={styles.note}>
          <HiOutlineInformationCircle size={24} />
          Logo is automatically generated
        </span>
        <h2>Alumni:</h2>
        <div className={styles.row}>
          <div className={styles.inputs}>
            <label htmlFor="alumni_discount_description">
              Alumni Discount (Blank field indicates No)
            </label>
            <input
              type="text"
              name="alumni_discount_description"
              value={partnerDetails.alumni_discount_description}
              onChange={handlePartnerDetailsChange}
            />
          </div>
        </div>

        <button disabled={isLoading}>
          {isLoading ? <AiOutlineLoading3Quarters /> : "Submit"}
        </button>
      </div>
    </form>
  );
}

export default AddPartner;
