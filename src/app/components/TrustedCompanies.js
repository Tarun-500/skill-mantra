"use client"

import React from 'react';
import Slider from 'react-slick';
import styles from './FinancePartner.module.css';
import Image from 'next/image';

import Img1 from "../../../public/images/trusted-companies-1.png"
import Img2 from "../../../public/images/trusted-companies-2.png"
import Img3 from "../../../public/images/trusted-companies-3.png"
import Img4 from "../../../public/images/trusted-companies-4.png"
import Img5 from "../../../public/images/trusted-companies-5.png"

const TrustedCompanies = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className={`section-padding ${styles.TrustedCompanies_container}`}>
            <h2 className={"head-1 text-blue text-center"}>Trusted by 200+ Companies Worldwide</h2>
            <Slider {...settings} className={`bg-blue mx-auto mx-1680 p-4 ${styles.slider}`}>
                <div className={styles.slide}>
                    <Image src={Img1} alt="Company 1" className={styles.logo} />
                </div>
                <div className={styles.slide}>
                    <Image src={Img2} alt="Company 2" className={styles.logo} />
                </div>
                <div className={styles.slide}>
                    <Image src={Img3} alt="Company 3" className={styles.logo} />
                </div>
                <div className={styles.slide}>
                    <Image src={Img4} alt="Company 4" className={styles.logo} />
                </div>
                <div className={styles.slide}>
                    <Image src={Img5} alt="Company 5" className={styles.logo} />
                </div>
            </Slider>
        </section>
    );
};

export default TrustedCompanies;
