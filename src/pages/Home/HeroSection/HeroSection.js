import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
   return (
      <>
         <div className="hero_section d-flex align-items-center justify-content-center">
            <Container>
               <div className="row hero_main_text_wrapper">
                  <div className="col-lg-10 text-center mx-auto" data-aos="fade-up">
                     <h2 className='sec_title'>We Can Teach You</h2>
                     <p className='sec_sm_text my-3'>Create an all-compassing website for your school with ease</p>
                     <Link to="/login"><button className='primary-btn mx-3'>Sign Up</button></Link>
                     <button className='secondary-btn'>Learn More</button>
                  </div>
               </div>
            </Container>
         </div>
      </>
   );
};

export default HeroSection;