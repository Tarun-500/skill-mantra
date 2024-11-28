"use client"

import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import styles from './components.module.css';
import RingComponent from './ui_components/ringBox'; 

const position = {
  "top": "0px",
  "right": "0px",
  "transform":"translate(50%, -50%)"

}
const CourseComponent = () => {
  return (
   <section className='section-padding bg-purple overflow-hidden'>
      <Container fluid className={` ${styles.course_component_container}`}>
        <RingComponent position={position} innerRingColor={'#00E0D340'} outerRingColor={'#00E0D340'} />
      <Row className="mx-1640 mx-auto justify-content-center">
      <h1 className={styles.title}>Certified Corporate Accounting</h1>
        
        <Col md={6} className="text-center mb-4">
          <p className={styles.description}>
           {" Skill Mantra's CCA course offers advanced skills in corporate accounting and auditing. This industry-oriented program prepares you for real-world challenges, enhancing your decision-making and unlocking lucrative career opportunities."}
          </p>
          <div className="d-flex justify-content-center gap-4">
            <div className={styles.infoBox}>
              <span className={styles.infoTitle}>Duration</span>
              <span>9 Months</span>
            </div>
            <div className={styles.infoBox}>
              <span className={styles.infoTitle}>Starts</span>
              <span>In 15 Days</span>
            </div>
          </div>
          <div className="mt-4">
            <Button variant="dark" className="me-2">Download Brochure</Button>
            <Button variant="warning">Apply Now</Button>
          </div>
        </Col>

        <Col md={5}>
          <Card className={styles.scholarshipCard}>
            <Card.Body className="text-center">
              <h5 className="text-uppercase">Limited Time Offer</h5>
              <h3 className="my-3">Get Scholarship Up To <span className="text-warning">50%</span></h3>
              <Button variant="warning" size="lg" className={styles.prospectusBtn}>
                Download Prospectus
              </Button>
              <div className="d-flex justify-content-center mt-4 gap-3">
                <div className={styles.timerBox}>
                  <span>00</span>
                  <small>Days</small>
                </div>
                <div className={styles.timerBox}>
                  <span>00</span>
                  <small>Hours</small>
                </div>
                <div className={styles.timerBox}>
                  <span>00</span>
                  <small>Minutes</small>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
   </section>
  );
};

export default CourseComponent;
