import React from 'react';
import PricingBox from '../PricingBox/PricingBox';
import Navigation from '../../../components/shared/Navigation';
import AllLogo from '../AllLogo/AllLogo';
import HeroSection from '../HeroSection/HeroSection';
import HowWorks from '../HowWorks/HowWorks';
import Services from '../Services/Services';
import OurDifference from '../OurDifference/OurDifference';
import Footer from '../Footer/Footer';
import Courses from '../Courses/Courses';

const Home = () => {
   return (
      <>
         <Navigation/>
         <HeroSection/>
         <Services/>
         <Courses/>
         <OurDifference/>
         <HowWorks/>
         <PricingBox></PricingBox>
         <AllLogo></AllLogo>
         <Footer></Footer>
      </>
   );
};

export default Home;