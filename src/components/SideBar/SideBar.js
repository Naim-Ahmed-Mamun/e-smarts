import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SideBar = ({show,handleClose}) => {
  
   return (
      <>
         <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
               <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
               <Link to="/review">Review</Link>
            </Offcanvas.Body>
         </Offcanvas>
      </>
   );
};

export default SideBar;