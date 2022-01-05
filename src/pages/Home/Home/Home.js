import React from 'react';
import PricingBox from '../PricingBox/PricingBox';
import AllLogo from '../AllLogo/AllLogo';
import HeroSection from '../HeroSection/HeroSection';
import HowWorks from '../HowWorks/HowWorks';
import Services from '../Services/Services';
import OurDifference from '../OurDifference/OurDifference';
import Footer from '../Footer/Footer';
import Courses from '../Courses/Courses';
// import MakeAnAdmin from '../../../components/MakeAnAdmin/MakeAnAdmin';
// import ManageAllOrder from '../../../components/ManageAllOrder/ManageAllOrder';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
   return (
      <>
         <HeroSection />
         <Services />
         <Courses />
         <OurDifference />
         <HowWorks />
         <Testimonials />
         <PricingBox></PricingBox>
         {/* <MakeAnAdmin></MakeAnAdmin> */}
         {/* <ManageAllOrder></ManageAllOrder> */}
         <AllLogo></AllLogo>
         <Footer></Footer>
      </>
   );
};

export default Home;