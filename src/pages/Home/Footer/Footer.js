import React from 'react';
import {Container} from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className='footerContainer'>
            <Container>
                <div className="row">
                    <div className='col-lg-3 col-md-6 col-sm-12 content' data-aos="fade-up">
                        <h3>About</h3>
                        <p>Academic English</p>
                        <p>Jacke Masito</p>
                        <p>Judith Stevens</p>
                        <p className='footerIcon'><i class="fas fa-phone-alt"></i> +88 01309888888</p>
                        <p className='footerIcon'><i class="fas fa-clock"></i> Fri-8.00-18.00</p>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 content' data-aos="fade-up">
                        <h3>Popular Courses</h3>
                        <p>Academic English</p>
                        <p>Jacke Masito</p>
                        <p>Judith Stevens</p>
                        <p>Web Technology</p>
                        <p>Judith Stevens</p>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 content' data-aos="fade-up">
                        <h3> Documentation</h3>
                        <p>Forums</p>
                        <p>Available Courses</p>
                        <p>Become An Instructor</p>
                        <p>Web Technology</p>
                        <p>Events</p>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 content' data-aos="fade-up">
                        <h3>Flexible Learning</h3>
                        <img src='https://esmarts.qodeinteractive.com/wp-content/uploads/2017/09/footer-map-img-1.png' alt='Empty!' style={{width: "215px"}}/>
                    </div>
                </div>
            </Container>
            </footer>
        </div>
    );
};

export default Footer;