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
import TriangleBox from "./ui_components/tringleBox";

const ProgramPartners = () => {
    const leftToRightSettings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        infinity: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 5,
            },
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 3,
            },
        },]

    };

    const rightToLeftSettings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 5,
        infinity: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        rtl: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 5,
            },
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 3,
            },
        },]
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

    const position = {
        top: "5%",
        right: "10%",
        transform: "translate(50%, -50%)",
        position: "absolute",
        zIndex: -1,
    }

    return (
        <section className={`section-padding ${styles.programPartners_container}`}>
            <TriangleBox colors="#00E0D3" position={position} />
            <h2 className={"head-1 text-blue text-center"}>Program Partners</h2>
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
