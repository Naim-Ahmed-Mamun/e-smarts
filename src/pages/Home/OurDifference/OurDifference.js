import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import './OurDifference.css';
import { AiOutlineCheck } from 'react-icons/ai';

const OurDifference = () => {
   return (
      <>
         <div className="our_difference">
            <Container className='d-flex tabs_wrapper'>
               <Tabs defaultActiveKey="What we do" id="uncontrolled-tab-example" className="mb-3 flex-column">
                  <Tab eventKey="What we do" title="What we do">

                     <div className="section_title mb-5">
                        <h5>Our Difference</h5>
                        <h2>What We Do</h2>
                        <p>Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque, facilisis vel mollis vitae, mollis nec ante.</p>
                     </div>

                     <ul className='mt-5 p-0'>
                        <li className='mb-3'><span className='me-3'><AiOutlineCheck className='icon' /></span>Lorem ipsum dolor sit amet consectetur adipiscing</li>
                        <li className='mb-3'><span className='me-3'><AiOutlineCheck className='icon' /></span>Nulla ante eros, venenatis vel malesuada sit amet</li>
                        <li className='mb-3'><span className='me-3'><AiOutlineCheck className='icon' /></span>Lorem ipscras maximus turpis eget erat</li>
                        <li className='mb-3'><span className='me-3'><AiOutlineCheck className='icon' /></span>Vestibulum vitae libero neque</li>
                     </ul>
                  </Tab>

                  <Tab eventKey="Education Centre" title="Education Centre">
                     <div className="section_title mb-5">
                        <h5>Our Difference</h5>
                        <h2>Education Centre</h2>
                        <p>Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque, facilisis vel mollis vitae, mollis nec ante.</p>
                     </div>

                     <ul className='mt-5 p-0'>
                        <li className='mb-3'><span className='me-3'><AiOutlineCheck className='icon' /></span>Lorem ipsum dolor sit amet consectetur adipiscing</li>
                        <li className='mb-3'><span className='me-3'><AiOutlineCheck className='icon' /></span>Nulla ante eros, venenatis vel malesuada sit amet</li>
                        <li className='mb-3'><span className='me-3'><AiOutlineCheck className='icon' /></span>Lorem ipscras maximus turpis eget erat</li>
                        <li className='mb-3'><span className='me-3'><AiOutlineCheck className='icon' /></span>Vestibulum vitae libero neque</li>
                     </ul>
                  </Tab>

                  <Tab eventKey="We’re already there" title="We’re already there">
                     <div className="section_title mb-5">
                        <h5>Our Difference</h5>
                        <h2>We’re already there</h2>
                        <p>Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque, facilisis vel mollis vitae, mollis nec ante.</p>
                     </div>

                     <ul className='mt-5 p-0'>
                        <li className='mb-3'><span className='me-3'><AiOutlineCheck className='icon' /></span>Lorem ipsum dolor sit amet consectetur adipiscing</li>
                        <li className='mb-3'><span className='me-3'><AiOutlineCheck className='icon' /></span>Nulla ante eros, venenatis vel malesuada sit amet</li>
                        <li className='mb-3'><span className='me-3'><AiOutlineCheck className='icon' /></span>Lorem ipscras maximus turpis eget erat</li>
                        <li className='mb-3'><span className='me-3'><AiOutlineCheck className='icon' /></span>Vestibulum vitae libero neque</li>
                     </ul>
                  </Tab>

                  <Tab eventKey="Your Financial Bridge" title="Your Financial Bridge">
                     <div className="section_title mb-5">
                        <h5>Our Difference</h5>
                        <h2>Your Financial Bridge</h2>
                        <p>Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque, facilisis vel mollis vitae, mollis nec ante.</p>
                     </div>

                     <ul className='mt-5 p-0'>
                        <li className='mb-3'><span className='me-3'><AiOutlineCheck className='icon' /></span>Lorem ipsum dolor sit amet consectetur adipiscing</li>
                        <li className='mb-3'><span className='me-3'><AiOutlineCheck className='icon' /></span>Nulla ante eros, venenatis vel malesuada sit amet</li>
                        <li className='mb-3'><span className='me-3'><AiOutlineCheck className='icon' /></span>Lorem ipscras maximus turpis eget erat</li>
                        <li className='mb-3'><span className='me-3'><AiOutlineCheck className='icon' /></span>Vestibulum vitae libero neque</li>
                     </ul>
                  </Tab>

                  <Tab eventKey="Word-Class Experts" title="Word-Class Experts">
                     <div className="section_title mb-5">
                        <h5>Our Difference</h5>
                        <h2>Word-Class Experts</h2>
                        <p>Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque, facilisis vel mollis vitae, mollis nec ante.</p>
                     </div>

                     <ul className='mt-5 p-0'>
                        <li className='mb-3'><span className='me-3'><AiOutlineCheck className='icon' /></span>Lorem ipsum dolor sit amet consectetur adipiscing</li>
                        <li className='mb-3'><span className='me-3'><AiOutlineCheck className='icon' /></span>Nulla ante eros, venenatis vel malesuada sit amet</li>
                        <li className='mb-3'><span className='me-3'><AiOutlineCheck className='icon' /></span>Lorem ipscras maximus turpis eget erat</li>
                        <li className='mb-3'><span className='me-3'><AiOutlineCheck className='icon' /></span>Vestibulum vitae libero neque</li>
                     </ul>
                  </Tab>

               </Tabs>
            </Container>
         </div>
      </>
   );
};

export default OurDifference;