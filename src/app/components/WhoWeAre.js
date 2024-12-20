"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "./FinancePartner.module.css";
import teamIcon from "../../../public/images/who-we-are.png";

const WhoWeAre = () => {
  return (
    <section className={`bg-yellow section-padding ${styles.whoWeAreSection}`}>
      <Container fluid>
        <Row className="align-items-center mx-1640">
          <Col md={5} className={styles.imageCol}>
            <div className={styles.iconWrapper}>
              <Image src={teamIcon} alt="Who We Are Icon" className={styles.icon} />
            </div>
          </Col>

          <Col md={7}>
            <p className={`para-1 mb-0 ${styles.description}`}>
              At Skill Mantra, we are dedicated to empowering individuals with the practical skills and knowledge needed to excel in today’s competitive job market. Specialising in short-term, job-oriented courses, we bridge the gap between academic learning and real-world demands. Our mission is to equip our students with industry-relevant expertise, ensuring they are job-ready from day one. With a focus on fields like accounting, HR, tax, and financial modelling, we provide hands-on training and career support to help you succeed in your chosen profession.

            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhoWeAre;
