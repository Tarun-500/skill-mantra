"use client";

import React from "react";
import styles from "./ui.module.css"; // For custom styles

const RingComponent = ({ position = {}, outerRingColor = "#FF5733", innerRingColor = "#33FF57" }) => {
    return (
        <div style={{
            position: "absolute",
            ...position,
        }}>
            <div
                className={styles.ringContainer}
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
        </div>
    );
};

export default RingComponent;
