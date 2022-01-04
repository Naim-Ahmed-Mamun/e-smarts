import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.webp';

const SideBar = ({show,handleClose}) => {
  
   return (
      <>
         <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
               <img style={{width:'200px', height:'80px'}} src={logo} alt="" />
            </Offcanvas.Header>
            <Offcanvas.Body>
               <Link to="/review">Review</Link>
            </Offcanvas.Body>
         </Offcanvas>
      </>
   );
};

export default SideBar;