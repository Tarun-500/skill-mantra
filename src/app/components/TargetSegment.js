"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './components.module.css'; 
import Image from 'next/image';
import Img1 from "../../../public/images/target-1.png"
import Img2 from "../../../public/images/target-2.png"
import Img3 from "../../../public/images/target-3.png"
import Img4 from "../../../public/images/target-4.png"
const TargetSegmentCarousel = () => {
  const segments = [
    { id: 1, title: "Student", image: Img1 },
    { id: 2, title: "Working Professional", image: Img2 },
    { id: 3, title: "CA/CS Candidates", image: Img3 },
    { id: 4, title: "Govt Job Candidates", image: Img4 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="">

    <div className={styles.target_segment_container}>
      <h2 className={"head-1 text-blue text-center"}>Target Segment Definition</h2>
      <Slider {...settings}>
        {segments.map((segment) => (
            <div key={segment.id} className={styles.card}>
            <Image src={segment.image} alt={segment.title} className={styles.image} />
            <h3 className={styles.segmentTitle}>{segment.title}</h3>
            <button className={styles.readMoreButton}>Read More</button>
          </div>
        ))}
      </Slider>
    </div>
        </section>
  );
};

export default TargetSegmentCarousel;
