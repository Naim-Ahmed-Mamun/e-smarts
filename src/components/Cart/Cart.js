import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GetContext } from '../../context/ContextProvider';
import Navigation from '../shared/Navigation';
import './Cart.css';

const Cart = () => {
   const { singleCourse } = useContext(GetContext);
   return (
      <>
         <Navigation />

         <div className="cart_items">
            <div className="d-flex align-items-center">
               <Container>
                  <h2 className='all_courses_title text-white'>Cart</h2>
               </Container>
            </div>
         </div>

         <Container className='mt-5'>
            <div className="card mb-3">
               <div className="row g-0">
                  <div className="col-md-4">
                     <img src={singleCourse?.img} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8 proceed_item">
                     <div className="card-body d-flex justify-content-evenly">
                        <div>
                           <h5 className='mb-4 course_type'>Course type</h5>
                           <h5 className="text-capitalize">{singleCourse?.type}</h5>
                        </div>
                        <div>
                           <h5 className='mb-4 course_price'>Price</h5>
                           <h5>${singleCourse?.price}</h5>
                        </div>
                     </div>
                     <Link to="/checkout"><button className='primary-btn proceed_btn'>Proceed to checkout</button></Link>
                  </div>
               </div>
            </div>
         </Container>
      </>
   );
};

export default Cart;