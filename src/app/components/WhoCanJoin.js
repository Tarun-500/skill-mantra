"use client";

import React from "react";
import Image from "next/image";
import styles from "./FinancePartner.module.css";
import certificateImage from "../../../public/images/certificate.webp";
import { Container, Row, Col } from "react-bootstrap";

const WhoCanJoin = () => {
    const categories = [
        "Accounting Enthusiasts",
        "Career Changers",
        "Recent Graduates",
        "Diverse Backgrounds",
        "Freelance Experienced",
        "Recent Graduates",
    ];

    return (
        <Container fluid className={`section-padding ${styles.whoCanJoinContainer}`}>

            <h2 className={"head-1 text-blue text-center"}>Who Can Join Certified Corporate Accounting</h2>
            <div className={`${styles.categoriesRow}`}>
                {categories.map((category, index) => (
                    <div className={styles.categoryBox} key={index}>
                        {category}
                    </div>
                ))}
            </div>

            <Row className={`align-items-center ${styles.certificateRow}`}>
                <Col md={6}>
                    <h3 className={styles.subtitle}>Get Industry Recognised Certification</h3>
                </Col>
                <Col md={6}>
                    <Image
                        src={certificateImage}
                        alt="Certificate of Achievement"
                        className={styles.certificateImage}
                        placeholder="blur"
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default WhoCanJoin;
