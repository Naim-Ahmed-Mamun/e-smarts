import React from 'react';
import Navigation from '../../../components/shared/Navigation';
import HeroSection from '../HeroSection/HeroSection';
import Services from '../Services/Services';

const Home = () => {
   return (
      <>
         <Navigation/>
         <HeroSection/>
         <Services/>
      </>
   );
};

export default Home;