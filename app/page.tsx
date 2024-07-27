import { NextPage } from 'next';
import HeroWrapper from './_components/hero/HeroWrapper';
import Footer from './_components/shared/Footer';
import HeroPricing from './_components/hero/HeroPricing';
import AboutWrapper from './_components/hero/AboutWrapper';
import HeroServices from './_components/hero/HeroServices';

const Homepage: NextPage = () => {
    return (
        <>
            <HeroWrapper />
            <AboutWrapper />
            <HeroServices />
            <HeroPricing />
            <Footer />
        </>
    );
};

export default Homepage;
