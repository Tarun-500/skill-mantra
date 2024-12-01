"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./components.module.css";

import Img1 from "../../../public/images/dream-1.png";
import Img2 from "../../../public/images/dream-2.png";
import Img3 from "../../../public/images/dream-3.png";
import Img4 from "../../../public/images/dream-4.png";

gsap.registerPlugin(ScrollTrigger);

const DreamsComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stat-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => {
      ctx.revert(); // Cleanup GSAP context on component unmount
    };
  }, []);

  const stats = [
    {
      image: Img1,
      value: "10,000+",
      description: "Learners Believe In Us",
    },
    {
      image: Img2,
      value: "78%",
      description: "Were Placed Through Us",
    },
    {
      image: Img3,
      value: "54%",
      description: "Average Salary Growth",
    },
    {
      image: Img4,
      value: "25%",
      description: "Expert Instructors",
    },
  ];

  return (
    <section
      className={`section-padding text-center ${styles.dreams_container}`}
      ref={containerRef} // Attach the reference
    >
      <h2 className={"head-1 text-blue text-center"}>A Mantra For Your Dreams</h2>
      <Container>
        <Row className="mx-1640 mx-auto justify-content-center">
          {stats.map((stat, index) => (
            <Col
              key={index}
              xs={12}
              md={6}
              lg={3}
              className={`${styles.statCard} stat-card`}
            >
              <div className={styles.card}>
                <div className={styles.image}>
                  <Image
                    src={stat.image}
                    alt={stat.description}
                  />
                </div>
                <h3 className={"head-1 text-center text-blue mt-3 mb-2"}>{stat.value}</h3>
                <p className={"para-1 text-blue"}>{stat.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DreamsComponent;
