"use client"

import React from 'react';
import Slider from 'react-slick';
import styles from './components.module.css';
import { Container } from 'react-bootstrap';
import RingComponent from './ui_components/ringBox';

const testimonials = [
  { name: "Amit Kumar", review: "Company is fully committed to enhancing skills of youth of India...", stars: 5 },
  { name: "Kumar Kosale", review: "I have a great experience with Skill Mantra. Skill Mantra helps to achieve your goals.", stars: 5 },
  { name: "Deepakshi Goswami", review: "Skill Mantra offers the best online webinars and skill development programs.", stars: 5 },
  { name: "Aisha Safi", review: "It was a great experience to grow my skill learning...", stars: 5 },
  { name: "Mukesh Kumawat", review: "Best team, same time reply, good knowledge.", stars: 5 },
  { name: "Meghanshi Kant", review: "Skill Mantra is a good platform to enhance skills and knowledge...", stars: 5 },
];

const TestimonialComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const position = {
    top: "50%",
    right: "0%",
    transform: "translate(50%, -50%)",
    position: "absolute",
  }

  return (
    <section className='section-padding bg-blue'>
      <RingComponent position={position} innerRingColor={'#00E0D340'} outerRingColor={'#00E0D340'} />
      <Container fluid className={`mx-1640 mx-auto ${styles.testimonialSection}`}>
        <h2 className="head-1 text-center text-white">Testimonials</h2>
        <Slider {...settings} className={styles.slider}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`card text-center ${styles.testimonialCard}`}>
              <div className="card-body">
                <h5 className={styles.head}> {"★".repeat(testimonial.stars).padEnd(5, "☆")}</h5>
                <p className={` ${styles.reviewText}`}>{testimonial.review}</p>
                <button className={`btn btn-blue ${styles.testiBtn}`}>{testimonial.name}</button>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default TestimonialComponent;
