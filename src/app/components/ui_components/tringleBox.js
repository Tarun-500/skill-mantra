"use client";

import React, { useState } from "react";
import styles from "./ui.module.css";

const TriangleBox = ({ numberOfTriangles = 7, colors = "#000", position = {}, direction = "column"  }) => {
    const [scale, setScale] = useState(Array(numberOfTriangles).fill(1));

    const handleClick = (index) => {
        const newScale = [...scale];
        newScale[index] = 1.3;
        setScale(newScale);


        setTimeout(() => {
            newScale[index] = 1;
            setScale([...newScale]);
        }, 300);
    };

    return (
        <div
            className={styles.triangleBox}
            style={{
                position: "absolute",
                ...position,
                flexDirection: direction,
            }}
        >
            {Array(numberOfTriangles)
                .fill(0)
                .map((_, index) => (
                    <div
                        key={index}
                        className={styles.triangle}
                        style={{
                            borderBottomColor: colors || "#ccc",
                            cursor: "pointer",
                            transform: `scale(${scale[index]})`,
                        }}
                        onClick={() => handleClick(index)}
                        onMouseOver={() => handleClick(index)}
                        onMouseOut={() => handleClick(index)}
                        onMouseLeave={() => handleClick(index)}
                    >
                    </div>
                ))}
        </div>
    );
};

export default TriangleBox;
