"use client";

import React from "react";
import Image from "next/image";
import styles from "./FinancePartner.module.css";
import certificateImage from "../../../public/images/certificate.webp";
import { Container, Row, Col } from "react-bootstrap";
import RingComponent from "./ui_components/ringBox";

const WhoCanJoin = () => {
    const categories = [
        "Accounting Enthusiasts",
        "Career Changers",
        "Recent Graduates",
        "Diverse Backgrounds",
        "Freelance Experienced",
        "Recent Graduates",
    ];
    const position = {
        top: "50%",
        left: "0px",
        "transform": "translate(-50%, -50%)",
        "zIndex": "-1",
        position: "absolute"
    }
    return (
        <section className="section-padding">
            <RingComponent position={position} innerRingColor="#AABDE140" outerRingColor="#AABDE140" />
            <Container fluid className={`mx-1640 mx-auto ${styles.whoCanJoinContainer}`}>
                <h2 className={"head-1 text-blue text-center"}>Who Can Join Certified Corporate Accounting</h2>
                <div className={`${styles.categoriesRow}`}>
                    {categories.map((category, index) => (
                        <div className={styles.categoryBox} key={index}>
                            {category}
                        </div>
                    ))}
                </div>

                <Row className={`align-items-center ${styles.certificateRow}`}>
                    <Col md={6} className="px-0">
                        <h2 className={"head-1 mx-695 text-blue text-center text-md-start mb-0"}>Get Industry Recognised Certification</h2>
                    </Col>
                    <Col md={6} className="px-0">
                        <Image
                            src={certificateImage}
                            alt="Certificate of Achievement"
                            className={styles.certificateImage}
                            placeholder="blur"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default WhoCanJoin;
