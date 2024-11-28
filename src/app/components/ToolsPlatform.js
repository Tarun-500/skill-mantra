"use client";

import React from "react";
import styles from "./components.module.css";
import Image from "next/image";
import Img1 from "../../../public/images/excel.png"
import Img11 from "../../../public/images/excel-color.png"
import Img2 from "../../../public/images/drive.png"
import Img22 from "../../../public/images/drive-color.png"
import Img3 from "../../../public/images/tally.png"
import Img33 from "../../../public/images/tally-color.png"
import Img4 from "../../../public/images/cloud.png"
import Img44 from "../../../public/images/cloud-color.png"
import DotBox from "./ui_components/dotBox";
const logos = [
    {
        blackAndWhite: Img1,
        color: Img11
    },
    {
        blackAndWhite: Img2,
        color: Img22
    },
    {
        blackAndWhite: Img3,
        color: Img33
    },
    {
        blackAndWhite: Img4,
        color: Img44
    }
];

const dotPosition = {
    top: "150px",
    right: "20%",
    transform: "translateX(-50%)",
    position: "absolute",
}

const ToolsPlatform = ({ headingText = "Our Tools Platform", }) => {
    return (
        <div className={`${styles.toolsPlatform}` + " " + "bg-purple"}>
            <h2>{headingText}</h2>
            <div className={styles.brandLogos}>
                {logos.map((logo, index) => (
                    <div key={index} className={styles.logoContainer}>
                        <Image
                            className={styles.logoImage}
                            src={logo.blackAndWhite}
                            alt={`logo-${index}-bw`}
                            style={{
                                filter: 'grayscale(100%)',
                                transition: 'filter 0.3s ease-in-out',
                            }}
                            onMouseOver={(e) => e.target.style.filter = 'grayscale(0%)'}
                            onMouseOut={(e) => e.target.style.filter = 'grayscale(100%)'}
                        />

                        <Image
                            className={styles.logoImage}
                            src={logo.color}
                            alt={`logo-${index}-color`}
                            style={{
                                display: 'none',
                            }}
                            onMouseOver={(e) => {
                                e.target.previousSibling.style.display = 'none';
                                e.target.style.display = 'inline';
                            }}
                            onMouseOut={(e) => {
                                e.target.previousSibling.style.display = 'inline';
                                e.target.style.display = 'none';
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
