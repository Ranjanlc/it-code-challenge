import Hero from "@/components/Home/Hero/Hero";
import Partner from "@/components/Home/Partner/Partner";
import Newsletter from "@/components/Newsletter/Newsletter";
import Head from "next/head";

export const generateHeadContent = (desc, title) => {
  return (
    <Head>
      {title && <title>{title}</title>}
      {desc && <meta name="description" content={desc} />}
    </Head>
  );
};
// Lets goo
export default function Home() {
  return (
    <>
      {/* For SEO purposes */}
      {generateHeadContent(
        "University of Louisiaa Monroe Alumni Search Directory Main page, University of Louisiaa Monroe Alumni Directory Add, University of Louisiaa Monroe Alumni Search Directory About, University of Louisiaa Monroe Alumni Search Directory FAQ, University of Louisiaa Monroe Alumni Search Directory Contact",
        "ULM Alumni Directory"
      )}
      <Hero />
      <Partner />
      <Newsletter />
    </>
  );
}
