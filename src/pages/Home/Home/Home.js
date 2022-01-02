import React from 'react';
import Navigation from '../../../components/shared/Navigation';
import HeroSection from '../HeroSection/HeroSection';
import HowWorks from '../HowWorks/HowWorks';
import OurDifference from '../OurDifference/OurDifference';
import Services from '../Services/Services';

const Home = () => {
   return (
      <>
         <Navigation/>
         <HeroSection/>
         <Services/>
         <OurDifference/>
         <HowWorks/>
      </>
   );
};

export default Home;