import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { GetContext } from '../../context/ContextProvider';
import useAuth from '../../hooks/useAuth';
import Footer from '../../pages/Home/Footer/Footer';
import Swal from 'sweetalert2';
import './Checkout.css';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
   const { singleCourse } = useContext(GetContext);
   const { user } = useAuth();
   const { register, handleSubmit, reset } = useForm();
   const navigate = useNavigate();

   // submit form
   const onSubmit = data => {
      data.course = singleCourse;
      fetch('https://limitless-shelf-68611.herokuapp.com/order', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(data)
      })
         .then(res => res.json())
         .then(data => {
            // console.log(data)
            if (data.acknowledged) {
               Swal.fire({
                  icon: 'success',
                  title: 'Order Place Successfully',
               })
               reset();
               navigate('/myOrder')
            }
         })
      //  console.log(data);
   };
   return (
      <>
         <div className="checkout">
            <div className="cart_items">
               <div className="d-flex align-items-center">
                  <Container>
                     <h2 className='all_courses_title text-white'>Checkout</h2>
                  </Container>
               </div>
            </div>

            <Container className='my-5'>
               <div className="form_container" data-aos="fade-up">
                  <form onSubmit={handleSubmit(onSubmit)}>
                     <label className='mb-3'>Name</label>
                     <input defaultValue={user?.displayName} {...register("name")} placeholder="Name" />
                     <label className='mb-3'>Email</label>
                     <input defaultValue={user?.email} {...register("email")} placeholder="Email" />
                     <label className='mb-3'>Address</label>
                     <input {...register("address")} placeholder="Your address" />
                     <label className='mb-3'>Course Name</label>
                     <input defaultValue={singleCourse?.type} {...register("courseType")} placeholder="Course type" />
                     <label className='mb-3'>Price</label>
                     <input defaultValue={singleCourse?.price} {...register("price")} placeholder="Price" />
                     {/* <textarea rows="5" {...register("review")} placeholder="Review" /> */}
                     <input className='mt-3' type="submit" value="Place Order" />
                  </form>
               </div>
            </Container>
         </div>

         <Footer></Footer>
      </>
   );
};

export default Checkout;