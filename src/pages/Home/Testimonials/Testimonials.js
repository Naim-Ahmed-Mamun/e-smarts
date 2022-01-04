import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Rating } from 'react-simple-star-rating';
import './Testimonials.css';

const Testimonials = () => {
   const [testimonials, setTestimonials] = useState([]);
   
   useEffect(() => {
      const url = `https://limitless-shelf-68611.herokuapp.com/review`
      fetch(url)
         .then(res => res.json())
         .then(data => setTestimonials(data))
   }, []);

   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
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
         <div className="testimonials">
            <Container>
               <Slider {...settings}>
                  {testimonials.map(testimonial => {
                     return (
                        <div key={testimonial._id}>
                           <div className="p-3 testimonial_item text-white text-center">
                              <p className='review mb-3'>{testimonial?.review}</p>
                              <h3 className='mb-3'>{testimonial?.name}</h3>
                              <Rating readonly size={30} ratingValue={testimonial?.ratings} />
                           </div>
                        </div>
                     )
                  })}
               </Slider>
            </Container>
         </div>
      </>
   );
};

export default Testimonials;