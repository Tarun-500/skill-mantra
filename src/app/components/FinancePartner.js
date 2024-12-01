"use client";

import React from "react";
import Image from "next/image";
import styles from "./FinancePartner.module.css";
import { Container, Row, Col } from "react-bootstrap";
import ShopSeLogo from "../../../public/images/shop-se.png";



const FinancePartner = () => {
  return (
    <section className="bg-green section-padding">
      <Container fluid className={`${styles.financePartnerContainer}`}>
        <Row className="justify-content-center">
          <Col xs={12}>
            <h2 className={"head-1 text-blue text-center"}>Our Finance Partner</h2>
          </Col>
          <Col md={8} className="my-auto">
            <p className={"para-1 mb-4 mb-md-0"}>
              With Our Finance Partner, You Can Now Enjoy Easy And Affordable Payment Options, Making
              Quality Education More Accessible Than Ever Which Ensures Financial Flexibility Without
              Any Hassle. Discover The Benefits Of Our New EMI Plans And Take The Next Step In Your
              Learning Journey With Confidence.
            </p>
          </Col>
          <Col md={4}>
            <div className={`d-flex justify-content-center align-items-center ${styles.imgBox}`}>
              <Image
                src={ShopSeLogo}
                alt="ShopSe Digital Finance Logo"
                className={styles.logo}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FinancePartner;
