import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../img/logo.webp';
import { NavLink } from 'react-router-dom';

const SideBar = ({ show, handleClose }) => {
   const { user, logout, admin } = useAuth();
   return (
      <>
         <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
               <img style={{ width: '200px', height: '80px' }} src={logo} alt="" />
            </Offcanvas.Header>
            <Offcanvas.Body>
               <Navbar expand="lg" className='d-md-none'>
                  <Nav>
                     <NavLink className="nav_link" to="/">Home</NavLink>
                     <NavLink className="nav_link" to="/allCourses">Courses</NavLink>
                     <NavLink className="nav_link" to="/">Instructors</NavLink>
                     <NavLink className="nav_link" to="/blogs">Blogs</NavLink>
                     <NavLink className="nav_link" to="/">Contact</NavLink>
                  </Nav>
               </Navbar>

               <ul className='p-0'>
                  <li className="nav_link"><Link to="/review">Review</Link></li>
                  <li className="nav_link"><Link to="/myOrders">My Cart</Link></li>
                  {admin && <li className="nav_link"><Link to="/manageAllOrders">Manage All Orders</Link></li>}
                  {admin && <li className="nav_link"><Link to="/makeAdmin">Make Admin</Link></li>}
               </ul>

               <div className="d-md-none">
                  {
                     user?.email ? <button onClick={logout} className="primary-btn mx-3">Logout</button>
                        : <Link to="/login"><button className="primary-btn mx-3">Login</button></Link>
                  }
                  {/* <Link to="/login"><button className="primary-btn mx-3">Login</button></Link> */}
                  {!user?.email && <Link to="/register"><button className="primary-btn">Register</button></Link>}
               </div>
            </Offcanvas.Body>
         </Offcanvas>
      </>
   );
};

export default SideBar;