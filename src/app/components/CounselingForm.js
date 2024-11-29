"use client";

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./FinancePartner.module.css";
import TriangleBox from "./ui_components/tringleBox";
import DotBox from "./ui_components/dotBox";

const CounselingForm = () => {
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
    });

    // Initial Form Values
    const initialValues = {
        name: "",
        phone: "",
        email: "",
    };

    // Form Submission Handler
    const handleSubmit = (values) => {
        alert(`Form Submitted: ${JSON.stringify(values, null, 2)}`);
    };

    const position = {
        "position": "absolute",
        "top": "50%",
        "right": "50%",
        "transform": "translate(-50%, -50%)"
    }
    const dotPosition = {
        "position": "absolute",
        "top": "100%",
        "right": "0%",
        "transform": "translate(-50%, -50%)"
    }

    return (
        <section className={`section-padding ${styles.counselingSection}`}>
            <TriangleBox colors="#FFC224" position={position} />
            <Container fluid>
                <Row className="mx-auto align-items-center mx-1640">
                    <Col md={6} className="position-relative">
                        <h2 className={styles.heading}>
                            Want to take a customised counselling before enrolling?
                        </h2>
                        <button className={"btn btn-blue"}>Book Now</button>
                        <DotBox rows={5} columns={10} defaultColor="#AABDE1" position={dotPosition} />
                    </Col>

                    <Col md={6}>
                        <div className={styles.formContainer}>
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

export default CounselingForm;
