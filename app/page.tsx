import { NextPage } from 'next';
import HeroWrapper from './_components/hero/HeroWrapper';
import Footer from './_components/shared/Footer';

const Homepage: NextPage = () => {
    return (
        <>
            <HeroWrapper />
            <Footer />
        </>
    );
};

export default Homepage;
