"use client";

import React, { useState } from "react";
import styles from "./components.module.css";
import Image from "next/image";
import Img1 from "../../../public/images/excel.png";
import Img11 from "../../../public/images/excel-color.png";
import Img2 from "../../../public/images/drive.png";
import Img22 from "../../../public/images/drive-color.png";
import Img3 from "../../../public/images/tally.png";
import Img33 from "../../../public/images/tally-color.png";
import Img4 from "../../../public/images/cloud.png";
import Img44 from "../../../public/images/cloud-color.png";
import DotBox from "./ui_components/dotBox";

const logos = [
    {
        blackAndWhite: Img1,
        color: Img11,
    },
    {
        blackAndWhite: Img2,
        color: Img22,
    },
    {
        blackAndWhite: Img3,
        color: Img33,
    },
    {
        blackAndWhite: Img4,
        color: Img44,
    },
];

const dotPosition = {
    top: "150px",
    right: "20%",
    transform: "translateX(-50%)",
    position: "absolute",
};

const ToolsPlatform = ({ headingText = "Our Tools Platform" }) => {
    return (
        <div className={`${styles.toolsPlatform} bg-purple`}>
            <h2>{headingText}</h2>
            <div className={`mx-1640 mx-auto ${styles.brandLogos}`}>
                {logos.map((logo, index) => (
                    <div
                        key={index}
                        className={styles.logoContainer}
                        style={{ position: "relative" }}
                        onMouseOver={(e) => {
                            e.currentTarget.querySelector(".bw-image").style.opacity = 0;
                            e.currentTarget.querySelector(".color-image").style.opacity = 1;
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.querySelector(".bw-image").style.opacity = 1;
                            e.currentTarget.querySelector(".color-image").style.opacity = 0;
                        }}
                    >
                        <Image
                            className={`${styles.logoImage} bw-image`}
                            src={logo.blackAndWhite}
                            alt={`logo-${index}-bw`}
                            style={{
                                display: "inline",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                transition: "opacity 0.3s ease-in-out",
                            }}
                        />

                        <Image
                            className={`${styles.logoImage} color-image`}
                            src={logo.color}
                            alt={`logo-${index}-color`}
                            style={{
                                display: "inline",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                opacity: 0,
                                transition: "opacity 0.3s ease-in-out",
                            }}
                        />


                    </div>
                ))}
            </div>
            <DotBox defaultColor={"red"} position={dotPosition} />
        </div>
    );
};

export default ToolsPlatform;
