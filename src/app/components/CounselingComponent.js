"use client"

import React from 'react';
import { Container, Row, Col, Button, } from 'react-bootstrap';
import styles from './components.module.css';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import RingComponent from './ui_components/ringBox';

const CounselingComponent = () => {

    // Validation Schema
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("Name is required")
            .min(3, "Name must be at least 3 characters"),
        phone: Yup.string()
            .required("Phone number is required")
            .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
        email: Yup.string()
            .required("Email ID is required")
            .email("Invalid email format"),
        location: Yup.string()
            .required("City/State is required"),
        details: Yup.string()
            .required("Details is required"),
        iam: Yup.string()
            .required("Details is required")
    });

    // Initial Form Values
    const initialValues = {
        name: "",
        phone: "",
        email: "",
        location: "",
        details: "",
        iam: "",
    };

    // Form Submission Handler
    const handleSubmit = (values) => {
        alert(`Form Submitted: ${JSON.stringify(values, null, 2)}`);
    };

    const position = {
        position: 'absolute',
        top: '50%',
        left: '0%',
        transform: 'translate(-70%, -25%)',
    }

    return (
        <section className='section-padding bg-blue'>
            <Container fluid className={`px-0 ${styles.counseling_component_container}`}>
                <RingComponent position={position} innerRingColor={'#AABDE140'} outerRingColor={'#AABDE140'} />
                <Row className="mx-1640 mx-auto justify-content-center align-items-center">
                    <Col md={6} className="px-0 px-md-3 text-center text-md-start text-white mb-5 mb-md-0">
                        <h1 className={"head-1 text-white "}>
                            Want to take a <br />
                            customised counselling <br />
                            before enrolling?
                        </h1>
                        <div className="mt-4 d-flex justify-content-center justify-content-md-start gap-3">
                            <button className='button btn-white'>
                                Download Brochure
                            </button>
                            <button className='button btn-green'>
                                Apply Now
                            </button>
                        </div>
                    </Col>

                    <Col md={6} className='px-0 px-md-3'>
                        <div className={`bg-white ${styles.formContainer}`}>
                            <h3 className={styles.formHeading}>Enroll for Free Counseling</h3>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ isSubmitting }) => (
                                    <Form className={styles.form}>
                                        <div className={styles.inputGroup}>
                                            {/* <label htmlFor="name">Name</label> */}
                                            <Field
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder="Name"
                                                className={styles.inputField}
                                            />
                                            <ErrorMessage
                                                name="name"
                                                component="div"
                                                className={"error"}
                                            />
                                        </div>

                                        <div className={styles.inputGroup}>
                                            {/* <label htmlFor="phone">Phone No.</label> */}
                                            <Field
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                placeholder="Phone"
                                                className={styles.inputField}
                                            />
                                            <ErrorMessage
                                                name="phone"
                                                component="div"
                                                className={"error"}
                                            />
                                        </div>

                                        <div className={styles.inputGroup}>
                                            {/* <label htmlFor="email">Email ID</label> */}
                                            <Field
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Email"
                                                className={styles.inputField}
                                            />
                                            <ErrorMessage
                                                name="email"
                                                component="div"
                                                className={"error"}
                                            />
                                        </div>
                                        <div className={styles.inputGroup}>
                                            {/* <label htmlFor="iam">Email ID</label> */}
                                            <Field
                                                type="text"
                                                name="iam"
                                                id="iam"
                                                placeholder="I am a:"
                                                className={styles.inputField}
                                            />
                                            <ErrorMessage
                                                name="iam"
                                                component="div"
                                                className={"error"}
                                            />
                                        </div>
                                        <div className={styles.inputGroup}>
                                            {/* <label htmlFor="iam">Email ID</label> */}
                                            <Field
                                                type="text"
                                                name="location"
                                                id="location"
                                                placeholder="City/State"
                                                className={styles.inputField}
                                            />
                                            <ErrorMessage
                                                name="location"
                                                component="div"
                                                className={"error"}
                                            />
                                        </div>
                                        <div className={styles.inputGroup}>
                                            {/* <label htmlFor="iam">Email ID</label> */}
                                            <Field
                                                type="text"
                                                name="details"
                                                id="details"
                                                placeholder="Why you want to take the counseling session"
                                                className={styles.inputField}
                                            />
                                            <ErrorMessage
                                                name="details"
                                                component="div"
                                                className={"error"}
                                            />
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CounselingComponent;
