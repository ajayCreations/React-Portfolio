import React from 'react'
import './testimonials.css'
import Avatar from '../../assets/me.png'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const testomonial__data=[
  {
    id:1,
    avatar:Avatar,
    name:'Ajay Kumar Yadav',
    review:`Full stack development is really awesome, everything seems dull in front of it.
     You can create anything you want, its just the question of will`,

  },

  {
    id:2,
    avatar:Avatar,
    name:'Ajay Kumar Yadav',
    review:`Full stack development is really awesome, everything seems dull in front of it. 
    You can create anything you want, its just the question of will`,

  },

  {
    id:3,
    avatar:Avatar,
    name:'Ajay Kumar Yadav',
    review:`Full stack development is really awesome, everything seems dull in front of it. 
    You can create anything you want, its just the question of will`,

  },

  {
    id:4,
    avatar:Avatar,
    name:'Ajay Kumar Yadav',
    review:`Full stack development is really awesome, everything seems dull in front of it.
     You can create anything you want, its just the question of will`,

  },

]

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper 
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="container testimonials__container">
       

      {
        testomonial__data.map((item)=>{
          return(
            <SwiperSlide key={item.id} className="testimonial">
            
            <div className="client__avatar">
              <img src={item.avatar} alt="" />
            </div>

            <h5 className='class__name'>{item.name}</h5>
              <small className="client__review">
               {item.review}
              </small>
          
          </SwiperSlide>

          )
        })
      }

      

        

      </Swiper>
    </section>
  )
}

export default Testimonials