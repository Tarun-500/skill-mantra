"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./FinancePartner.module.css";
import SliderImg1 from "../../../public/images/growth-slider-1.png";
import SliderImg2 from "../../../public/images/growth-slider-2.png";
import SliderImg3 from "../../../public/images/growth-slider-3.png";
import SliderImg4 from "../../../public/images/growth-slider-4.png";
import SliderImg5 from "../../../public/images/growth-slider-5.png";
import { Container } from "react-bootstrap";

const sections = [
    {
        title: "Vast Job Market",
        content:
            "India has more than 10L job openings in accounting and finance every year.",
        img: SliderImg1,
    },
    {
        title: "High Demand in 2024",
        content:
            "96% of Indian companies are planning to hire Finance or Accounting staff in 2024.",
        img: SliderImg2,
    },
    {
        title: "Diverse Career Paths",
        content:
            "Accounting career provides various job opportunities such as Accountants, Senior Accountants, Chief Revenue Officers, Financial Analysts, etc.",
        img: SliderImg3,
    },
    {
        title: "Competitive Salaries",
        content:
            "The Accounting salary offered at entry-level positions ranges between INR 2 - 4 LPA, for mid-level profiles INR 4 - 7 LPA and for senior-level profiles INR 7 - 12 LPA.",
        img: SliderImg4,
    },
    {
        title: "Future Growth Opportunities",
        content:
            "Accounting graduates can either go for jobs or choose to pursue further options such as CA, CS, CPA, CFA, MBA in Finance, CMA, Diploma in Taxation, etc.",
        img: SliderImg5,
    },
];

const AssetsSliders = () => {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="bg-blue">
            <Container fluid className={styles.asset_slider_container}>
                <Slider {...settings}>
                    {sections.map((course, index) => (
                        <div key={index} className={styles.slider_card}>
                            <div className={styles.slider_img_box}>
                                <Image
                                    src={course.img}
                                    alt={course.title}
                                    className={styles.img}
                                    width={100}
                                />
                            </div>
                            <p className={styles.slider_text}>{course.title}</p>
                        </div>
                    ))}
                </Slider>
            </Container>
        </section>
    );
};

export default AssetsSliders;