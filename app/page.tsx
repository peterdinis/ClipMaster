import { NextPage } from "next";
import HeroWrapper from "./_components/hero/HeroWrapper";
import Footer from "./_components/shared/Footer";
import HeroPricing from "./_components/hero/HeroPricing";

const Homepage: NextPage = () => {
  return (
    <>
      <HeroWrapper />
      <HeroPricing />
      <Footer />
    </>
  );
};

export default Homepage;
