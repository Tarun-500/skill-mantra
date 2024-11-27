"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./FinancePartner.module.css";

import WellsFargo from "../../../public/images/program-partner-1.png";
import IBM from "../../../public/images/program-partner-2.png";
import ITC from "../../../public/images/program-partner-3.png";
import Dell from "../../../public/images/program-partner-4.png";
import Bosch from "../../../public/images/program-partner-5.png";
import Honeywell from "../../../public/images/program-partner-6.png";
import TechMahindra from "../../../public/images/program-partner-7.png";
import Accenture from "../../../public/images/program-partner-8.png";
import Mindtree from "../../../public/images/program-partner-10.png";
import Xerox from "../../../public/images/program-partner-11.png";
import Pepsico from "../../../public/images/program-partner-9.png";

const ProgramPartners = () => {
    const leftToRightSettings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
    };

    const rightToLeftSettings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        rtl: true,
    };

    const logos = [
        { src: WellsFargo, alt: "Wells Fargo" },
        { src: IBM, alt: "IBM" },
        { src: ITC, alt: "ITC Infotech" },
        { src: Dell, alt: "Dell" },
        { src: Bosch, alt: "Bosch" },
        { src: Honeywell, alt: "Honeywell" },
        { src: TechMahindra, alt: "Tech Mahindra" },
        { src: Accenture, alt: "Accenture" },
        { src: Mindtree, alt: "Mindtree" },
        { src: Xerox, alt: "Xerox" },
        { src: Pepsico, alt: "Pepsico" },
    ];

    return (
        <section className={styles.programPartners_container}>
            <h2 className={styles.heading}>Program Partners</h2>
            <div className={styles.sliderContainer}>
                <Slider {...leftToRightSettings} className={styles.slider}>
                    {logos.map((logo, index) => (
                        <div key={index} className={styles.slide}>
                            <Image src={logo.src} alt={logo.alt} width={250} height={"auto"} />
                        </div>
                    ))}
                </Slider>

                <Slider {...rightToLeftSettings} className={styles.slider}>
                    {logos.map((logo, index) => (
                        <div key={index} className={styles.slide}>
                            <Image src={logo.src} alt={logo.alt} width={250} height={"auto"} />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default ProgramPartners;
