import React from 'react';
import './instructor.css'
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import ins_1 from './../../img/instructor-img-2.jpg'
import ins_2 from './../../img/instructor-img-3.jpg'
import ins_3 from './../../img/instructor-img-4.jpg'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Footer from '../Home/Footer/Footer';

const Instructor = () => {
    const instructorData = [
        {
            id: 1,
            image: ins_1,
            title: 'Jacke Masito',
            desc: 'Donec iaculis mi eget tempus lobortis. Maecenas vitae velit neque. Pellentesque suscipit facilisis sapien. Suspen auctor…'
        },
        {
            id: 2,
            image: ins_2,
            title: 'Richard Dune',
            desc: 'Donec iaculis mi eget tempus lobortis. Maecenas vitae velit neque. Pellentesque suscipit facilisis sapien. Suspen auctor….'
        },
        {
            id: 3,
            image: ins_3,
            title: 'Glen Anders',
            desc: 'Donec iaculis mi eget tempus lobortis. Maecenas vitae velit neque. Pellentesque suscipit facilisis sapien. Suspen auctor…'
        },
    ]
    return (
        <>
            <div className="instructor-section mt-5">
                <Container>
                    <Row>
                        <Col sm={8} className='leftside-banner'>
                            <img src="https://esmarts.qodeinteractive.com/wp-content/uploads/2017/10/become-instructor-video-img-1.png" alt="" />
                        </Col>
                        <Col sm={4} className='rightside-form'>
                            <Form className='m-3 shadow p-3'>
                                <h4 className='fw-bold'>Fill This Form</h4>
                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Control type="text" border="primary" placeholder="name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder=" email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicNumber">
                                    <Form.Control type="number" placeholder="phone number" />
                                </Form.Group>

                                <Form.Group className="mb-3 border-0" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows={3} placeholder="comment" />
                                </Form.Group>

                                <Button variant="info" className='rounded-pill px-3 py-2' type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>

                <section id='instructors'>
                    <div className="container my-5">

                        <div className="row">

                            <div className='w-75 text-center mx-auto'>
                                
                                <h6 className='text-info fs-5'> What's New !</h6> 
                                <h1 className='text-uppercase'>The Best Tutors in Town</h1>
                                <p className='fs-6 text-secondary'>Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque, facilisis vel mollis vitae, mollis nec ante. Quisque aliquam dictum condim.</p>
                            </div>

                            {
                                instructorData.map(instructor => <div key={instructor.id}
                                    className='col-lg-4 col-md-6 col-sm-12 text-center'>
                                    <div className=' p-3'>
                                        <img src={instructor.image} alt="" />
                                        <h3 className='my-3 ser_title'>{instructor.title}</h3>
                                        <h6 className='text-gray'>Teacher</h6>
                                        <p className='ser_desc'>{instructor.desc}</p>
                                        <div className='fs-2'>
                                            <span className='mx-1'><BsFacebook /></span>
                                            <span className='mx-1'><AiFillInstagram /></span>
                                            <span className='mx-1'><AiFillTwitterCircle /></span>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </section>

            </div>

            <Footer></Footer>
        </>
    );
};

export default Instructor;