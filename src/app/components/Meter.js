"use client";

import React, { useEffect, useRef } from "react";

const stats = [
  { value: 100, label: "1000+ Careers Advanced" },
  { value: 70, label: "200+ Corporate Tie-Ups" },
  { value: 50, label: "50+ Qualified Trainers" },
  { value: 90, label: "10K+ Students Counseled" },
  { value: 80, label: "6M+ Reach On Social Media" },
];

const MeterComponent = () => {
  const needleRefs = useRef([]);

  const animateNeedles = () => {
    needleRefs.current.forEach((needle, index) => {
      const degree = (stats[index].value / 100) * 180; 
      needle.style.transform = `rotate(${degree}deg)`;
    });
  };

  useEffect(() => {
    animateNeedles();
  }, []);

  return (
    <div className="container">
      {stats.map((stat, index) => (
        <div key={index} className="meter">
          <div
            className="needle"
            ref={(el) => (needleRefs.current[index] = el)}
          />
          <div className="meter-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default MeterComponent;
