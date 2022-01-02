import React from 'react';
import Navigation from '../../../components/shared/Navigation';
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
      </>
   );
};

export default Home;