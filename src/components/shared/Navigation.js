import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { BiMenu } from 'react-icons/bi';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../img/logo.webp';
import './Navigation.css';
import SideBar from '../SideBar/SideBar';


const Navigation = () => {
   const { user, logout } = useAuth();
   // console.log(user.email);
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   return (
      <>
         <div>
            <div className="d-none d-lg-block top_bar border-bottom">
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
                        {
                           user?.email ? <button onClick={logout} className="primary-btn mx-3">Logout</button>
                              : <Link to="/login"><button className="primary-btn mx-3">Login</button></Link>
                        }
                        {/* <Link to="/login"><button className="primary-btn mx-3">Login</button></Link> */}
                        {!user?.email && <Link to="/register"><button className="primary-btn">Register</button></Link>}
                     </div>
                  </div>
               </Container>
            </div >
         </div>

         <Container>
            <Navbar bg="light" expand="lg">

               <img style={{ width: '300px', height: '97px' }} src={logo} alt="" />
               <Container>
                  <Nav className="d-none d-md-block ms-auto">
                     <NavLink className="nav_link" to="/">Home</NavLink>
                     <NavLink className="nav_link" to="/allCourses">Courses</NavLink>
                     <NavLink className="nav_link" to="/instructor">Instructors</NavLink>
                     <NavLink className="nav_link" to="/blogs">Blogs</NavLink>
                     <NavLink className="nav_link" to="/contact">Contact</NavLink>
                  </Nav>
                  <div className="ms-3"><span onClick={handleShow}><BiMenu className="menuBar" /></span> </div>
               </Container>
            </Navbar>
         </Container>

         <SideBar show={show} handleClose={handleClose}></SideBar>
      </>
   );
};

export default Navigation;