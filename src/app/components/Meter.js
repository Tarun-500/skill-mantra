"use client";

import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";

const stats = [
  { value: 90, label: "1000+ Careers Advanced" },
  { value: 70, label: "200+ Corporate Tie-Ups" },
  { value: 50, label: "50+ Qualified Trainers" },
  { value: 90, label: "10K+ Students Counseled" },
  { value: 80, label: "6M+ Reach On Social Media" },
];

const MeterComponent = () => {
  const needleRefs = useRef([]);

  const animateNeedles = (hoverIndex = null) => {
    needleRefs.current.forEach((needle, index) => {
      const baseValue = stats[index].value;
      const adjustedValue = hoverIndex === index ? baseValue + 10 : baseValue;
      const clampedValue = Math.min(Math.max(adjustedValue, 0), 100);
      const degree = (clampedValue / 100) * 180;
      needle.style.transform = `rotate(${degree}deg)`;
    });
  };

  useEffect(() => {
    animateNeedles();
  }, []);

  return (
    <Container fluid className="mx-1640 mx-auto section-padding">
      <div className="meterBox">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="meter"
            onMouseEnter={() => animateNeedles(index)}
            onMouseLeave={() => animateNeedles()}
          >
            <svg className="gauge" viewBox="0 0 100 50">
              <path
                d="M 6 45 A 45 45 0 0 1 95 45"
                fill="none"
                stroke="#1e3165"
                strokeWidth="10"
              />
            </svg>

            <div
              className="needle"
              ref={(el) => (needleRefs.current[index] = el)}
            >
              <svg width="100" height="100" viewBox="0 0 100 100">
                <path
                  d="M50 95 L45 45 Q50 5, 55 45 Z"
                  fill="#00d9d9"
                />
              </svg>
            </div>

            <div className="meter-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default MeterComponent;
