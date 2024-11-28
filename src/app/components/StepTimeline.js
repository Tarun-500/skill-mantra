"use client";

import React from "react";
import styles from "./components.module.css";

const steps = [
    {
        step: "Step 1",
        text: "Apply and appear for the Interview",
        color: "#FFC107",
    },
    {
        step: "Step 2",
        text: "Enroll and appear for assessments",
        color: "#1E3165",
    },
    {
        step: "Step 3",
        text: "True CV Interview Preparation",
        color: "#00D9D9",
    },
];

const StepTimeline = () => {
    return (
        <div className={styles.timelineContainer}>
            {steps.map((item, index) => (
                <div className={styles.stepContainer} key={index}>
                    <div className={styles.line}></div>
                    <div className={styles.stepCircle} style={{ backgroundColor: item.color }}>
                        <span className={styles.stepText}>{item.step}</span>
                    </div>
                    <div className={styles.connector} style={{ borderColor: item.color }}>
                        <svg viewBox="0 0 100 100" className={styles.curve}>
                            <path
                                d={`M ${index === 1 ? "50" : "100"},100 Q 50,50 ${index === 1 ? "50" : "0"},0`}
                                fill="none"
                                stroke={item.color}
                                strokeWidth="3"
                            />
                        </svg>
                    </div>
                    <p className={styles.stepDescription}>{item.text}</p>
                </div>
            ))}
        </div>
    );
};

export default StepTimeline;
