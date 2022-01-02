import React from 'react';
import PricingBox from '../../../components/PricingBox/PricingBox';
import Navigation from '../../../components/shared/Navigation';
import AllLogo from '../../AllLogo/AllLogo';
import HeroSection from '../HeroSection/HeroSection';
import HowWorks from '../HowWorks/HowWorks';
import Services from '../Services/Services';
import OurDifference from '../OurDifference/OurDifference';

const Home = () => {
   return (
      <>
         <Navigation/>
         <HeroSection/>
         <Services/>
         <OurDifference/>
         <HowWorks/>
         <PricingBox></PricingBox>
         <AllLogo></AllLogo>
      </>
   );
};

export default Home;