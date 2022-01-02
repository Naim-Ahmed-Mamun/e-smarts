import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import './OurDifference.css';
import { AiOutlineCheck } from 'react-icons/ai';

const OurDifference = () => {
   return (
      <>
         <div className="our_difference">
            <Container className='d-flex'>
               <Tabs defaultActiveKey="What We Do" id="uncontrolled-tab-example" className="mb-3 d-flex flex-column">
                  <Tab eventKey="What We Do" title="What We Do">

                     <div className="section_title mb-5">
                        <h5>Our Difference</h5>
                        <h2>What We Do</h2>
                        <p>Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque, facilisis vel mollis vitae, mollis nec ante. Quisque aliquam dictum condim.</p>
                     </div>

                     <ul className='p-0'>
                        <li className='mb-3'><AiOutlineCheck className='icon me-3'/>Lorem ipsum dolor sit amet consectetur adipiscing</li>
                        <li className='mb-3'><AiOutlineCheck className='icon me-3'/>Nulla ante eros, venenatis vel malesuada sit amet</li>
                        <li className='mb-3'><AiOutlineCheck className='icon me-3'/>Lorem ipscras maximus turpis eget erat</li>
                        <li className='mb-3'><AiOutlineCheck className='icon me-3'/>Vestibulum vitae libero neque</li>
                     </ul>
                     
                  </Tab>

                  <Tab eventKey="Education Centre" title="Education Centre">

                     <div className="section_title mb-5">
                        <h5>Our Difference</h5>
                        <h2>Education Centre</h2>
                        <p>Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque, facilisis vel mollis vitae, mollis nec ante. Quisque aliquam dictum condim.</p>
                     </div>

                     <ul className='p-0'>
                        <li><AiOutlineCheck/>Lorem ipsum dolor sit amet consectetur adipiscing</li>
                        <li><AiOutlineCheck/>Nulla ante eros, venenatis vel malesuada sit amet</li>
                        <li><AiOutlineCheck/>Lorem ipscras maximus turpis eget erat</li>
                        <li><AiOutlineCheck/>Vestibulum vitae libero neque</li>
                     </ul>

                  </Tab>
               </Tabs>
            </Container>
         </div>
      </>
   );
};

export default OurDifference;