"use client"

import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import styles from './components.module.css';
import RingComponent from './ui_components/ringBox';

const position = {
  "top": "0px",
  "right": "0px",
  "transform": "translate(50%, -50%)"

}
const CourseComponent = () => {
  return (
    <section className='section-padding bg-purple overflow-hidden'>
      <Container fluid className={` ${styles.course_component_container}`}>
        <RingComponent position={position} innerRingColor={'#00E0D340'} outerRingColor={'#00E0D340'} />
        <Row className="mx-1640 mx-auto justify-content-center">
          <h1 className={"head-1 text-blue text-center mb-5"}>Certified Corporate Accounting</h1>

          <Col md={6} className="text-center text-md-start mb-5 mb-md-0 pe-xl-5">
            <div className='mx-695 pe-lg-5'>
              <p className={"para-1 mb-5"}>
                {" Skill Mantra's CCA course offers advanced skills in corporate accounting and auditing. This industry-oriented program prepares you for real-world challenges, enhancing your decision-making and unlocking lucrative career opportunities."}
              </p>
              <div className="d-flex justify-content-center justify-content-md-start gap-2 bg-white rounded-5 p-3 mb-4">
                <div className={"flex-1 px-0 px-sm-3"}>
                  <span className={"head-3 text-blue d-block"}>Duration</span>
                  <span className='para-2 text-blue'>9 Months</span>
                </div>
                <div className={"flex-1 px-0 px-sm-3"}>
                  <span className={"head-3 text-blue d-block"}>Starts</span>
                  <span className='para-2 text-blue'>In 15 Days</span>
                </div>
              </div>
              <div className="mt-5">
                <button className="button btn-blue-1 me-3">Download Brochure</button>
                <button className='button btn-yellow'>Apply Now</button>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <Card className={styles.scholarshipCard}>
              <Card.Body className="text-center">
                <button className="button btn-blue-1 mb-3 shadow-1 w-75">Limited Time Offer</button>
                <h3 className="head-3 text-white my-3">Get Scholarship Up To 50%</h3>
                <button  className={"button btn-yellow rounded-0 fw-bold para-3 w-100 btn-lg"}>
                  Download Prospectus
                </button>
                <div className="d-flex justify-content-center mt-5 gap-5 gap-md-3">
                  <div className={`bg-white d-flex justify-content-center align-items-center flex-column gap-0 ${styles.timerBox}`}>
                    <h5 className='head-3 mb-0'>00</h5>
                    <p className='para-3 mb-0'>Days</p>
                  </div>
                  <div className={`bg-white d-flex justify-content-center align-items-center flex-column gap-0 ${styles.timerBox}`}>
                    <h5 className='head-3 mb-0'>00</h5>
                    <p className='para-3 mb-0'>Hours</p>
                  </div>
                  <div className={`bg-white d-flex justify-content-center align-items-center flex-column gap-0 ${styles.timerBox}`}>
                    <h5 className='head-3 mb-0'>00</h5>
                    <p className='para-3 mb-0'>Minutes</p>
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
