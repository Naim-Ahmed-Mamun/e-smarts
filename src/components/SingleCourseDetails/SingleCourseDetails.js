import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './SingleCourseDetails.css';
import { GetContext } from "../../context/ContextProvider";
import Navigation from '../shared/Navigation';
import { Container } from 'react-bootstrap';
import Footer from '../../pages/Home/Footer/Footer';

const SingleCourseDetails = () => {
   const { id } = useParams();
   const { singleCourse, setSingleCourse } = useContext(GetContext);
   useEffect(() => {
      const url = `https://limitless-shelf-68611.herokuapp.com/courses/${id}`;
      fetch(url)
         .then(res => res.json())
         .then(data => setSingleCourse(data))
   }, [id, setSingleCourse])
   console.log(singleCourse);
   return (
      <>
         <div className='mt-5 single_course'>
            <div className="all_courses_header d-flex align-items-center">
               <Container>
                  <h2 className='all_courses_title text-white text-capitalize'>{singleCourse?.name}</h2>
               </Container>
            </div>
            <Container className='mt-5'>
               <div className="single_item">
                  <div className="single_item_header d-flex justify-content-between">
                     <h2 className='text-capitalize single_course_type'>{singleCourse?.type}
                        <span className='single_price rounded ms-5'>$ {singleCourse?.price}</span> </h2>
                     <Link to="/cart"><button className='primary-btn'>Buy Course</button></Link>
                  </div>

                  <div className="course_img my-5">
                     <img src={singleCourse?.img} alt="" />
                  </div>

                  <h2 className='course_title'>About this course</h2>

                  <p className='course_description'>{singleCourse?.description}</p>
               </div>
            </Container>
         </div>

         <Footer></Footer>
      </>
   );
};

export default SingleCourseDetails;