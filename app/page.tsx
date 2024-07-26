import { NextPage } from 'next';
import HeroWrapper from './_components/hero/HeroWrapper';
import Footer from './_components/shared/Footer';
import HeroPricing from './_components/hero/HeroPricing';
import HeroServices from './_components/hero/HeroServices';
import AboutWrapper from './_components/hero/AboutWrapper';

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
