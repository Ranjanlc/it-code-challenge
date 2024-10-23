import React, { useEffect, useState } from "react";
import Hero from "../components/FAQ/Hero/Hero";
import Main from "../components/FAQ/Main/Main";
import Contact from "../components/FAQ/Contact/Contact";
import { generateHeadContent } from ".";
import { useRouter } from "next/router";
import { FAQs } from "@/constants/DATA";

function FAQ() {
  const [refinedFAQs, setRefinedFAQs] = useState(FAQs);
  const router = useRouter();

  useEffect(() => {
    const searchTerm = router.query.search || ""; // Get search term from query
    setRefinedFAQs(
      FAQs.filter((faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [router.query.search]); // Re-run whenever the search query changes

  const changeSearchTerm = (term) => {
    router.push(`/FAQs?search=${term}`);
  };

  return (
    <>
      {/* For SEO purposes */}
      {generateHeadContent(
        "ULM Alumni Directory frequently asked questions",
        "ULM Alumni Directory-FAQs"
      )}
      <div>
        <Hero
          setSearchTerm={(val) => changeSearchTerm(val)}
          searchTerm={router.query.search || ""}
        />
        <Main faqs={refinedFAQs} />
        <Contact />
      </div>
    </>
  );
}

export default FAQ;
