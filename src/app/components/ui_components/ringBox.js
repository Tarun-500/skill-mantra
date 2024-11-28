"use client";

import React from "react";
import styles from "./ui.module.css"; // For custom styles

const RingComponent = ({ position = {}, outerRingColor = "#FF5733", innerRingColor = "#33FF57" }) => {
    return (
        <div
            className={styles.ringContainer}
            style={{
                position: "absolute",
                ...position,
            }}
        >

            <div
                className={styles.outerRing}
                style={{
                    borderColor: outerRingColor,
                }}
            >

                <div
                    className={styles.innerRing}
                    style={{
                        borderColor: innerRingColor,
                    }}
                ></div>
            </div>
        </div>
    );
};

export default RingComponent;
