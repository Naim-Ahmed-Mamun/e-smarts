import React from 'react';
import './Services.css';
import ser_1 from '../../../img/ser_1.webp';
import ser_2 from '../../../img/ser_2.webp';
import ser_3 from '../../../img/ser_3.webp';
import { Container } from 'react-bootstrap';

const Services = () => {
   const servicesData = [
      {
         id: 1,
         icon: ser_1,
         title: 'Notification & Emails',
         desc: 'Lorem ipsum dolor sit ametcon, sectetur adipiscing elit. Phasellus vehic sagittis euismod.'
      },
      {
         id: 2,
         icon: ser_2,
         title: 'Certification',
         desc: 'Phasellus vehic sagittis euismod. Lorem ipsum dolor sit ametcon, sectetur adipiscing elit.'
      },
      {
         id: 3,
         icon: ser_3,
         title: 'Europe Campus',
         desc: 'Lorem ipsum dolor sit ametcon, sectetur adipiscing elit. Phasellus vehic sagittis euismod.'
      },
   ]
   return (
      <>
         <div className="services">
            <Container>
               <div className="section_title text-center mb-5">
                  <h5>Guaranteed Success</h5>
                  <h2>Our Services</h2>
                  <p>Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque, facilisis vel mollis vitae, mollis nec ante. Quisque aliquam dictum condim.</p>
               </div>
               
                  <div className="row">
                        {
                           servicesData.map(service => <div key={service.id} 
                           className='col-lg-4 col-md-6 col-sm-12 text-center'>
                                 <div className='shadow p-3 rounded'>
                                    <img src={service.icon} alt="" />
                                    <h3 className='my-3 ser_title'>{service.title}</h3>
                                    <p className='ser_desc'>{service.desc}</p>
                                 </div>
                           </div>)
                        }
                  </div>
               
            </Container>
         </div>
      </>
   );
};

export default Services;