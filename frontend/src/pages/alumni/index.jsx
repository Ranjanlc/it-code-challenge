import React from "react";
import Hero from "@/components/AlumniOnBoard/Hero/Hero";
import { generateHeadContent } from "..";
import Alumni from "@/components/AlumniOnBoard/Alumni/Alumni";

function AlumniOnBoard({ admin }) {
  return (
    <>
      {/* For SEO purposes */}
      {generateHeadContent(
        "ULM Alumni Directory , Company on board, alumni",
        "Alumni"
      )}
      {/* No need of a separate CSS file for one styling */}
      <div
        style={{
          position: "relative",
        }}
      >
        <Hero />
        <Alumni admin={admin} />
      </div>
    </>
  );
}

export default AlumniOnBoard;
