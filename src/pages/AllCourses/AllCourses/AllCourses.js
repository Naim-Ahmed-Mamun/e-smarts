import React from 'react';
import { Card, Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCourses from '../../../hooks/useCourses';
import './AllCourses.css';
import { AiOutlineUser, AiFillStar } from 'react-icons/ai';
import Footer from '../../Home/Footer/Footer';

const AllCourses = () => {
   const { courses, loading } = useCourses();
   if (loading) {
      return (
         <div className='my-5 text-center'>
            <Spinner animation="grow" />
         </div>
      )
   }
   return (
      <>
         <div className="all_courses">
            <div className="all_courses_header d-flex align-items-center">
               <Container>
                  <h2 className='all_courses_title text-white'>All Courses</h2>
                  <Link to="/"><span className='d-inline-block me-3 text-white'>Home /</span></Link>
                  <span className='d-inline-block text-white'>All-Courses</span>
               </Container>
            </div>

            <Container>
               <div className="row pt-5">
                  {courses.map(course => <div key={course?._id} className='col-lg-4 col-md-4 col-sm-6 col-12'>
                     <Link to={`/courses/${course?._id}`}>
                        <Card className='course_box mb-4'>
                           <Card.Img style={{ height: '300px' }} variant="top" src={course?.img} />
                           <Card.Body>
                              <Card.Title className='text-capitalize title mb-2'>{course?.name}</Card.Title>
                              <Card.Text className='trainer'> {course?.trainer}</Card.Text>
                              <Card.Text className='description border-bottom'> {course?.description.slice(0, 70)} <span style={{ color: 'red' }}>...continue</span></Card.Text>
                              <ul className='p-0 d-flex align-items-center course_bottom_item'>
                                 <li className='me-2 student'><AiOutlineUser className='me-2' />{course?.student} Students</li>
                                 <li><AiFillStar className='rating me-2' />{course?.rating} Ratings</li>
                                 <li className='price rounded text-white'>${course?.price}</li>
                              </ul>
                           </Card.Body>
                        </Card>
                     </Link>
                  </div>)}
               </div>
            </Container>
         </div>

         <Footer></Footer>
      </>
   );
};

export default AllCourses;