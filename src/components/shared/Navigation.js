import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo.webp';
import './Navigation.css';


const Navigation = () => {
   return (
      <>
         <div className="top_bar border-bottom">
            <Container>
               <div className="d-flex align-items-center justify-content-between mt-3">
                  <div className="top_bar_left_side pb-2">
                     <span className='d-inline-block top_text'>WELCOME</span>
                     <span className='d-inline-block mx-3 top_text'>CALL +44 300 303 0266</span>
                     <span className='d-inline-block me-4 top_text'>FOLLOW US</span>
                     <span className='d-inline-block'><BsFacebook className='icon' /></span>
                     <span className='d-inline-block mx-3'><BsTwitter className='icon' /></span>
                     <span className='d-inline-block'><FaInstagramSquare className='icon' /></span>
                  </div>
                  <div className="top_bar_right_side pb-2">
                     <button className="primary-btn mx-3">Login</button>
                     <button className="primary-btn">Register</button>
                  </div>
               </div>
            </Container>
         </div>

         <Navbar bg="light" expand="lg">
            <Container>
               <img style={{ width: '300px', height: '97px' }} src={logo} alt="" />
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                     <NavLink className="nav_link" to="/">Home</NavLink>
                     <NavLink className="nav_link" to="/">Courses</NavLink>
                     <NavLink className="nav_link" to="/">Instructors</NavLink>
                     <NavLink className="nav_link" to="/blogs">Blogs</NavLink>
                     <NavLink className="nav_link" to="/">Contact</NavLink>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>

      </>
   );
};

export default Navigation;