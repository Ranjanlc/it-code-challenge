import React, { useContext, useEffect, useState } from "react";
import styles from "./Profile.module.css";

import TopContainer from "../../components/Profile/TopContainer/TopContainer";
import SideContainer from "../../components/Profile/SideContainer/SideContainer";
import CenterContainer from "../../components/Profile/CentreContainer/CenterContainer";
import { AlumniContext } from "@/pages/_app";
import { useRouter } from "next/router";
import { generateHeadContent } from "..";

function Profile() {
  const { partner } = useContext(AlumniContext);
  const { query } = useRouter();
  const { id } = query;
  const [similarProfile, setSimilarProfile] = useState(null);

  const [partnerProfile, setPartnerProfile] = useState(null);

  useEffect(() => {
    let otherPartners = [...partner];
    let activePartner = partner.find((el) => el._id === id);
    otherPartners.splice(partner.indexOf(activePartner), 1);
    console.log(otherPartners);
    setSimilarProfile(otherPartners.slice(0, 3));
    setPartnerProfile(activePartner);
    // eslint-disable-next-line
  }, [id, partner]);

  return (
    <>
      {/* For SEO purposes */}
      {generateHeadContent(
        `ULM Alumni Directory individual alumnus page,${
          partnerProfile?.name || ""
        }`,
        `Partner: ${partnerProfile?.name || ""}`
      )}
      {partnerProfile && (
        <div className={styles.profile}>
          <div className={styles.profile_top}>
            <div></div>
          </div>
          <div className={styles.position_relative_profile}>
            <div className={styles.position_absolute_profile}>
              <TopContainer partner={partnerProfile} />
            </div>
            <div className={styles.profile_bottom}>
              <SideContainer
                partner={partnerProfile}
                similarProfiles={similarProfile}
              />
              <CenterContainer partner={partnerProfile} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
