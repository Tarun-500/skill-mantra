"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./components.module.css";

import Img1 from "../../../public/images/dream-1.png"
import Img2 from "../../../public/images/dream-2.png"
import Img3 from "../../../public/images/dream-3.png"
import Img4 from "../../../public/images/dream-4.png"


gsap.registerPlugin(ScrollTrigger);

const DreamsComponent = () => {
    useEffect(() => {

        gsap.fromTo(
            ".stat-card",
            { opacity: .1, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: ".dreams-container",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            }
        );
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
        <div className="dreams-container text-center">
            <h2 className={styles.heading}>A Mantra For Your Dreams</h2>
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
                                <Image
                                    src={stat.image}
                                    alt={stat.description}
                                    width={300}
                                    height={200}
                                    className={styles.image}
                                />
                                <h3 className={styles.value}>{stat.value}</h3>
                                <p className={styles.description}>{stat.description}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default DreamsComponent;
