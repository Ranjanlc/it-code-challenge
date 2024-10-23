import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";

import styles from "./Alumni.module.css";
import { BsSearch } from "react-icons/bs";
import Card from "../../../UI/Card/Card";
import { AlumniContext } from "@/pages/_app";
import LoadingSpinner from "../../../UI/LoadingSpinner/LoadingSpinner";
import Link from "next/link";
import { useRouter } from "next/router";

const ITEMS_PER_PAGE = 9;

function Alumni({ admin }) {
  const { partner } = useContext(AlumniContext);
  const router = useRouter();
  const [searchPartners, setSearchPartners] = useState(partner);
  const [page, setPage] = useState(1);

  // To fix the problem of blank page when reloading
  useEffect(() => {
    setSearchPartners(partner);
  }, [partner]);

  useEffect(() => {
    let filtered_partners = partner;
    const searchTerm = router.query.search || ""; // use search term directly from router.query
    let search_term = RegExp(searchTerm, "i");
    if (searchTerm) {
      // filter partners based on search term
      filtered_partners = partner.filter(
        (partner) =>
          partner?.name?.match(search_term) ||
          partner?.name_of_business?.match(search_term)
      );
    }
    setSearchPartners(filtered_partners);
  }, [router.query.search, partner]);

  const handleViewMore = () => {
    if (page * ITEMS_PER_PAGE >= searchPartners?.length) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchTerm = e.target.searchTerm.value;
    router.push({ query: { search: searchTerm } });
  };

  return (
    <div className={styles.onboard}>
      <div className={styles.onboard_container}>
        {partner.length === 0 && <LoadingSpinner />}
        {partner.length !== 0 && (
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={styles.onboard_partner_search}
          >
            <div className={styles.admin}>
              {admin ? (
                <>
                  <Link
                    href={"/admin/add-partner/1"}
                    className={styles.addPartner}
                  >
                    Add Partner
                  </Link>
                  <button
                    onClick={() => {
                      localStorage.removeItem("alumni-token");
                      router.replace("/admin/login");
                    }}
                  >
                    Logout
                  </button>
                </>
              ) : null}
            </div>

            <form className={styles.search} onSubmit={handleSearchSubmit}>
              <div className={styles.search_content}>
                <BsSearch className={styles.search_icon} />
                <input
                  type="text"
                  name="searchTerm"
                  className={styles.searchTerm}
                  placeholder="Search"
                  defaultValue={router.query.search || ""}
                />
              </div>
              <button
                type="submit"
                className={`${styles["primary-btn"]} ${styles.search_button}`}
              >
                Search
              </button>
            </form>
          </motion.div>
        )}

        <div className={styles.partner_cards}>
          {searchPartners?.slice(0, page * ITEMS_PER_PAGE).map((partner, i) => {
            return <Card partner={partner} key={i} admin={admin} />;
          })}
        </div>

        {partner.length !== 0 && (
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.partner_button}
          >
            {page * ITEMS_PER_PAGE < searchPartners?.length && (
              <button
                className={`${styles["secondary-btn"]}`}
                onClick={handleViewMore}
              >
                View More
              </button>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Alumni;
