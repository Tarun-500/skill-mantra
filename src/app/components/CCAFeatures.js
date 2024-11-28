"use client";

import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { gsap } from "gsap";
import styles from "./components.module.css";

import CCAImg1 from "../../../public/images/cca-1.png"
import CCAImg2 from "../../../public/images/cca-2.png"
import CCAImg3 from "../../../public/images/cca-3.png"
import CCAImg4 from "../../../public/images/cca-4.png"
import CCAImg5 from "../../../public/images/cca-5.png"
import CCAImg6 from "../../../public/images/cca-6.png"
import CCAImg7 from "../../../public/images/cca-7.png"
import CCAImg8 from "../../../public/images/cca-8.png"
import Image from "next/image";


const CCAFeatures = () => {
    const containerRef = useRef(null);
    useEffect(() => {
        const elements = containerRef.current.querySelectorAll(`.${styles.feature}`);


        gsap.fromTo(
            elements,
            { opacity: 0, y: "-100%" },
            {
                opacity: 1,
                y: 0,
                stagger: 0.2,
                duration: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: true,
                },
            }
        );

        gsap.fromTo(
            elements,
            { opacity: 0, y: "-100%" },
            {
                opacity: 1,
                y: 0,
                stagger: .1,
                duration: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: true,
                },
            }
        );
    }, []);
    const features = [
        { icon: CCAImg1, text: "Skill Development", },
        { icon: CCAImg2, text: "Career Enhancement" },
        { icon: CCAImg3, text: "Hands-On Applications" },
        { icon: CCAImg4, text: "Expert Guidance" },
        { icon: CCAImg5, text: "Strategic Insights" },
        { icon: CCAImg6, text: "Organizational Impact" },
        { icon: CCAImg7, text: "Professional Community" },
        { icon: CCAImg8, text: "Tailored to Your Level" },
    ];
    const bgColors = ["bg-yellow", "bg-purple", "bg-green"];
    return (
        <div className={styles.ccaFeautures_container}>
            <h2 className={styles.heading}>Why Certified Corporate Accountant (CCA)?</h2>
            <Container fluid ref={containerRef}>
                <Row className="mx-1640 mx-auto">
                    {features.map((feature, index) => (
                        <Col key={index} xs={12} md={6} lg={3} className={styles.featureCol}>
                            <div className={styles.feature}>
                                <Image src={feature.icon} alt={feature.text} className={styles.icon} />
                                <p className={styles.text}>{feature.text}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default CCAFeatures;
