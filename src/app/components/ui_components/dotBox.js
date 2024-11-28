"use client";

import React, { useState } from "react";
import styles from "./ui.module.css";

const DotBox = ({ rows = 10, columns = 5, defaultColor = "#ccc", position = {} }) => {
    const [dots, setDots] = useState(
        Array(rows * columns).fill({ color: defaultColor, opacity: 1 })
    );

    const changeDotProperties = (index, color) => {
        const newDots = [...dots];
        const currentDot = newDots[index];


        newDots[index] = {
            color: color,
            opacity: currentDot.opacity === 1 ? 0.3 : 1,
        };
        setDots(newDots);
    };

    return (
        <div
            className={styles.dotBox}
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                ...position,
            }}
        >
            {Array(rows)
                .fill(0)
                .map((_, rowIndex) => (
                    <div
                        key={rowIndex}
                        className={styles.row}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        {Array(columns)
                            .fill(0)
                            .map((_, colIndex) => {
                                const dotIndex = rowIndex * columns + colIndex;
                                return (
                                    <div
                                        key={colIndex}
                                        className={styles.circle}
                                        style={{
                                            backgroundColor: dots[dotIndex].color,
                                            opacity: dots[dotIndex].opacity,
                                            borderRadius: "50%",
                                            cursor: "pointer",
                                        }}
                                        onClick={() => {

                                            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
                                            changeDotProperties(dotIndex, randomColor);
                                        }}
                                    ></div>
                                );
                            })}
                    </div>
                ))}
        </div>
    );
};

export default DotBox;
