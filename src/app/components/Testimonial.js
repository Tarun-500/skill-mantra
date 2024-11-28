"use client"

import React from 'react';
import Slider from 'react-slick';
import styles from './components.module.css';

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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={`section-padding ${styles.testimonialSection}`}>
      <h2 className="head-1 text-center text-white">Testimonials</h2>
      <Slider {...settings} className={styles.slider}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`card ${styles.testimonialCard}`}>
            <div className="card-body">
              <div className="text-center">
                {"★".repeat(testimonial.stars).padEnd(5, "☆")}
              </div>
              <p className={`mt-3 ${styles.reviewText}`}>{testimonial.review}</p>
              <h5 className="text-center mt-3">{testimonial.name}</h5>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialComponent;
