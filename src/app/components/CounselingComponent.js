"use client"

import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import styles from './components.module.css';

const CounselingComponent = () => {
    return (
        <section className='section-padding bg-blue'>
            <Container fluid className={`${styles.counseling_component_container}`}>
                <Row className="mx-1640 mx-auto justify-content-center align-items-center">
                    <Col md={6} className="text-center text-md-start text-white">
                        <h1 className={styles.title}>
                            Want to take a <br />
                            customised counselling <br />
                            before enrolling?
                        </h1>
                        <div className="mt-4 d-flex justify-content-center justify-content-md-start gap-3">
                            <Button variant="outline-light" size="lg">
                                Download Brochure
                            </Button>
                            <Button variant="info" size="lg">
                                Apply Now
                            </Button>
                        </div>
                    </Col>

                    <Col md={5} className="mt-5 mt-md-0">
                        <Card className={styles.formCard}>
                            <Card.Body>
                                <h4 className="text-center mb-4">Enroll for Free Counseling</h4>
                                <Form>
                                    <Form.Group controlId="formName" className="mb-3">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your name" />
                                    </Form.Group>
                                    <Form.Group controlId="formPhone" className="mb-3">
                                        <Form.Label>Phone No.</Form.Label>
                                        <Form.Control type="tel" placeholder="Enter your phone number" />
                                    </Form.Group>
                                    <Form.Group controlId="formEmail" className="mb-3">
                                        <Form.Label>Email ID</Form.Label>
                                        <Form.Control type="email" placeholder="Enter your email" />
                                    </Form.Group>
                                    <Form.Group controlId="formCategory" className="mb-3">
                                        <Form.Label>I am a :</Form.Label>
                                        <Form.Control type="text" placeholder="e.g. Student, Professional" />
                                    </Form.Group>
                                    <Form.Group controlId="formLocation" className="mb-3">
                                        <Form.Label>City/State</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your city or state" />
                                    </Form.Group>
                                    <Form.Group controlId="formReason" className="mb-3">
                                        <Form.Label>Why you want to take the counseling session</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="Enter your reason" />
                                    </Form.Group>
                                    <div className="text-center">
                                        <Button variant="primary" type="submit" size="lg">
                                            Submit
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CounselingComponent;
