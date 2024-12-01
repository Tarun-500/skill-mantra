"use client"

import React from 'react';
import { Container, Row, Col, Card, CardTitle, CardBody, CardText } from 'react-bootstrap';
import styles from './FinancePartner.module.css';
import Image from 'next/image';
import Img1 from "../../../public/images/job_assistance_1.png"
import Img2 from "../../../public/images/job_assistance_2.png"
import DotBox from './ui_components/dotBox';

const position = {
  position: "absolute",
  top: "100%",
  right: "0px",
  "transform": "translate(-50%, -50%)",
  "z-index": "9"
}

const JobAssistance = () => {
  return (
    <section className='bg-yellow section-padding'>
      <DotBox defaultColor="#fff" position={position} />

      <Container fluid className={`py-5 ${styles.JobAssistance_container}`}>
        <Row className="justify-content-center mx-auto mx-1640">
          <Col md={6}>
            <Card className={`text-center h-100 ${styles.card}`}>
              <CardBody>
                <CardTitle className={styles.title}>
                  Placement Assistance & Process
                </CardTitle>
                <div className={styles.icon}>
                  <Image
                    src={Img1}
                    alt="Placement Assistance Icon"
                    className={styles.image}
                  />
                </div>

                <ul className={styles.text}>
                  <li>Personalized guidance to help you secure your ideal job.</li>
                  <li>Dedicated support throughout your job search journey.</li>
                </ul>
              </CardBody>
            </Card>
          </Col>
          <Col md={6}>
            <Card className={`text-center h-100 ${styles.card}`}>
              <CardBody>
                <CardTitle className={styles.title}>
                  CV Prep & Enhancement
                </CardTitle>
                <div className={styles.icon}>
                  <Image
                    src={Img2}
                    alt="CV Prep Icon"
                    className={styles.image}
                  />
                </div>

                <ul className={styles.text}>
                  <li>Professional resume crafting to highlight your strengths.</li>
                  <li>Tailored CV advice to make you stand out to employers.</li>
                </ul>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default JobAssistance;
