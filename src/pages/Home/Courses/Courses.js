import React from 'react';
import { Card, Container } from 'react-bootstrap';
import useCourses from '../../../hooks/useCourses';
import './Courses.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { AiOutlineUser,AiFillStar } from 'react-icons/ai';

const Courses = () => {
   const { courses } = useCourses();

   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               initialSlide: 1
            }
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   };

   return (
      <>
         <div className="courses">
            <Container>
               <div className="section_title text-center mb-5">
                  <h2 className='text-white'>Popular Online Courses</h2>
                  <p className='text-white'>
                     Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque,
                     facilisis vel mollis vitae, mollis nec ante. Quisque aliquam
                     dictum condim.
                  </p>
               </div>

               <Slider {...settings}>
                  {courses.map(course => {
                     return (
                        <Card className='course_box'>
                           <Card.Img style={{height:'300px'}} variant="top" src={course?.img} />
                           <Card.Body>
                              <Card.Title className='text-capitalize title mb-2'>{course?.type}</Card.Title>
                              <Card.Text className='trainer'> {course?.trainer}</Card.Text>
                              <Card.Text className='description border-bottom'> {course?.description.slice(0,70)} <span style={{color:'red'}}>...continue</span></Card.Text>
                              <ul className='p-0 d-flex align-items-center course_bottom_item'>
                                 <li className='me-2 student'><AiOutlineUser className='me-2' />{course?.student} Students</li>
                                 <li><AiFillStar className='me-2 rating'/>{course?.rating} Ratings</li>
                                 <li className='price rounded text-white'>${course?.price}</li>
                              </ul>
                           </Card.Body>
                        </Card>
                     )
                  })}
               </Slider>

            </Container>
         </div>
      </>
   );
};

export default Courses;