import { NextPage } from "next";
import HeroWrapper from "./_components/hero/HeroWrapper";
import Footer from "./_components/shared/Footer";
import HeroPricing from "./_components/hero/HeroPricing";
import HeroServices from "./_components/hero/HeroServices";
import { CustomerSays } from "./_components/hero/CustomerSays";

const Homepage: NextPage = () => {
  return (
    <>
      <HeroWrapper />
      <HeroServices />
     {/*  <CustomerSays /> */} {/* Update later */}
      <HeroPricing />
      <Footer />
    </>
  );
};

export default Homepage;
