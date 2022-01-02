import React from 'react';
import Navigation from '../../../components/shared/Navigation';
import HeroSection from '../HeroSection/HeroSection';
import HowWorks from '../HowWorks/HowWorks';
import Services from '../Services/Services';

const Home = () => {
   return (
      <>
         <Navigation/>
         <HeroSection/>
         <Services/>
         <HowWorks/>
      </>
   );
};

export default Home;