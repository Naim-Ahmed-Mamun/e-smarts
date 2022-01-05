import React from 'react';
import { Card } from 'react-bootstrap';
import { AiOutlineUser, AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const SingleCourse = ({ course }) => {
   return (
      <>
         <Link to={`/courses/${course?._id}`}>
            <Card className='course_box' data-aos="fade-up">
               <Card.Img style={{ height: '300px' }} variant="top" src={course?.img} />
               <Card.Body>
                  <Card.Title className='text-capitalize title mb-2'>{course?.name}</Card.Title>
                  <Card.Text className='trainer'> {course?.trainer}</Card.Text>
                  <Card.Text className='description border-bottom'> {course?.description.slice(0, 70)} 
                  <span style={{ color: '#04D2C8' }}>...continue</span></Card.Text>
                  <ul className='p-0 d-flex align-items-center course_bottom_item'>
                     <li className='me-2 student'><AiOutlineUser className='me-2 user_icon' />{course?.student} Students</li>
                     <li className='rating'><AiFillStar className='me-2 rating_icon' />{course?.rating} Ratings</li>
                     <li className='price rounded text-white'>${course?.price}</li>
                  </ul>
               </Card.Body>
            </Card>
         </Link>
      </>
   );
};

export default SingleCourse;