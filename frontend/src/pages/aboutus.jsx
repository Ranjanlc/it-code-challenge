import React from "react";
import Newsletter from "../components/Newsletter/Newsletter";
import Hero from "../components/Aboutus/Hero/Hero";
import Frame from "../components/Aboutus/Frame/Frame";
import { generateHeadContent } from ".";

function About() {
  return (
    <>
      {/* For SEO purposes */}
      {generateHeadContent(
        "University of Lousiana Monroe Alumni Directory About us, Our Newsletter",
        "ULM Alumni Directory About Us"
      )}
      <div>
        <Hero />
        <Frame />
        <Newsletter />
      </div>
    </>
  );
}

export default About;
