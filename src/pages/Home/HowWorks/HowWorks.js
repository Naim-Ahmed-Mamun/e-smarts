import React from 'react';
import { Container } from 'react-bootstrap';
import './HowWorks.css';
import works_img_1 from '../../../img/how-works-1.webp';
import works_img_2 from '../../../img/how-works-2.webp';
import works_img_3 from '../../../img/how-works-3.webp';
import works_img_4 from '../../../img/how-works-4.webp';

const HowWorks = () => {
   const worksData = [
      {
         id:1,
         img:works_img_1,
         title:'Facility',
         smDesc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
         id:2,
         img:works_img_2,
         title:'E-Learning',
         smDesc:'Nulla ante eros, venenatis vel malesuada sit amet luctus.',
      },
      {
         id:3,
         img:works_img_3,
         title:"Kid's Courses",
         smDesc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
         id:4,
         img:works_img_4,
         title:'Best Students',
         smDesc:'Nulla ante eros, venenatis vel malesuada sit amet luctus.',
      },
   ]
   return (
      <>
         <div className="how_works_section">
            <Container>
               <div className="section_title text-center mb-5">
                  <h5>Research & Pedagogy</h5>
                  <h2>How It Works?</h2>
                  <p>Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque, facilisis vel mollis vitae, mollis nec ante. Quisque aliquam dictum condim.</p>
               </div>
               <div className="row works_items_wrapper mt-5">
                 {
                    worksData.map(work => <div key={work.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="work_box text-center">
                           <div className="img mb-3">
                              <img src={work.img} alt="" />
                           </div>
                           <h3 className='mb-2 work_title'>{work.title}</h3>
                           <p>{work.smDesc}</p>
                        </div>
                    </div>)
                 }
               </div>
            </Container>
         </div>
      </>
   );
};

export default HowWorks;