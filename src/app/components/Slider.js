"use client"

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./FinancePartner.module.css"
import SliderImg1 from "../../../public/images/slider-1.png"
import SliderImg2 from "../../../public/images/slider-2.png"
import SliderImg3 from "../../../public/images/slider-3.png"
import SliderImg4 from "../../../public/images/slider-4.png"
import SliderImg5 from "../../../public/images/slider-5.png"
import SliderImg6 from "../../../public/images/slider-6.png"
import SliderImg7 from "../../../public/images/slider-7.png"
import SliderImg8 from "../../../public/images/slider-8.png"
import { Container } from "react-bootstrap";
const CourseSlider = () => {
    const courses = [
        { title: "HR Payroll Program", img: SliderImg1 },
        { title: "HR Generalist", img: SliderImg2 },
        { title: "GST Course", img: SliderImg3 },
        { title: "TDS Course", img: SliderImg4 },
        { title: "Accounting for Accountants", img: SliderImg5 },
        { title: "Financial Modelling", img: SliderImg6 },
        { title: "Tally (Basic to Advance)", img: SliderImg7 },
        { title: "Office Automation", img: SliderImg8 },
    ];

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

        responsive: [
            {
                breakpoint: 1200,
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
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="bg-blue section-padding">
            <Container fluid className={styles.slider_container}>
                <Slider {...settings}>
                    {courses.map((course, index) => (
                        <div key={index} className={styles.slider_card}>
                            <div className={styles.slider_img_box}>
                                <Image
                                    src={course.img}
                                    alt={course.title}
                                    className={styles.img}
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

export default CourseSlider;
