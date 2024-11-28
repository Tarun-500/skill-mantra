"use client";

import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./components.module.css";  
import Image from "next/image";

import Img1 from "../../../public/images/cca-1.png"
import Img2 from "../../../public/images/cca-2.png"
import Img3 from "../../../public/images/cca-3.png"
import Img4 from "../../../public/images/cca-4.png"
import Img5 from "../../../public/images/cca-5.png"
import Img6 from "../../../public/images/cca-6.png"
import Img7 from "../../../public/images/cca-7.png" 

gsap.registerPlugin(ScrollTrigger);

const ProgramFeatures = () => {
    const containerRef = useRef(null);
    const scrollSectionRef = useRef(null);

    const features = [
        {
            icon: Img1,
            title: "Overall Approach",
            description: "Prepare to make your mark in accounting with a course designed to equip you for success.",
        },
        {
            icon: Img2,
            title: "Program Structure",
            description: "A 30+ hour journey of focused learning through theory and practice.",
        },
        {
            icon: Img3,
            title: "Hands-On Practice",
            description: "Candidates are directly involved in their learning with practical experience.",
        },
        {
            icon: Img4,
            title: "Assessment & Career Edge",
            description: "Culminating in a final exam opens doors for a successful corporate career.",
        },
        {
            icon: Img5,
            title: "Tailored Learning",
            description: "Experience personalized coursework fit for your career goals.",
        },
        {
            icon: Img6,
            title: "Integrated Curriculum",
            description: "Blends theory with practical skills for real-world use.",
        },
        {
            icon: Img7,
            title: "Overall Approach",
            description: "Prepare to make your mark in accounting with a course designed to equip you for success.",
        },
        
    ];

    useEffect(() => {
        const container = containerRef.current;
        const scrollSection = scrollSectionRef.current;

        // Calculate dimensions
        const scrollWidth = scrollSection.scrollWidth;
        const viewportWidth = container.offsetWidth;

        // Get the last card's width and offset to center it
        const lastCard = scrollSection.lastElementChild;
        const lastCardWidth = lastCard.offsetWidth;
        const offsetToCenterLastCard = viewportWidth / 2 - lastCardWidth / 2;

        // Calculate the total scroll distance
        const totalScrollDistance = scrollWidth - viewportWidth + offsetToCenterLastCard;

        gsap.to(scrollSection, {
            x: -(scrollWidth - viewportWidth + offsetToCenterLastCard),
            ease: "none",
            scrollTrigger: {
                trigger: container,
                start: "top 30%",
                end: () => `+=${totalScrollDistance}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    const bgColors = ["bg-yellow", "bg-purple", "bg-green"];

    return (
        <div className={`mx-1680 mx-auto overflow-hidden section-padding ${styles.programFeatures_container}`} ref={containerRef}>
            <Container fluid>

                <div className={`${styles.horizontalScrollSection}`} ref={scrollSectionRef}>
                    <Row className={styles.featureRow}>
                        {features.map((feature, index) => (
                            <Col key={index} className={`${styles.featureCol}`}>
                                <div className={`h-100 ${styles.card} ${bgColors[index % bgColors.length]}`}>
                                    <Image src={feature.icon} alt={feature.title} className={styles.icon} />
                                    <h4 className={styles.cardTitle}>{feature.title}</h4>
                                    <p className={styles.cardDescription}>{feature.description}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default ProgramFeatures;
