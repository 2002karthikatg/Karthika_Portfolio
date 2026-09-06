"use client";

import React, {
  useEffect,
  useState,
} from "react";

import Image from "next/image";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import "./Preloader.css";

interface PreloaderProps {
  onComplete?: () => void;
}

function Preloader({
  onComplete,
}: PreloaderProps) {
  const [progress, setProgress] =
    useState(0);

  const [isExiting, setIsExiting] =
    useState(false);

  const shouldReduceMotion =
    useReducedMotion();

  /* =========================================================
     PROGRESS SIMULATION
  ========================================================= */

  useEffect(() => {
    const duration =
      shouldReduceMotion ? 800 : 2500;

    const interval = 30;

    const step =
      (100 / duration) * interval;

    const timer = setInterval(() => {
      setProgress((previous) => {
        const next = previous + step;

        if (next >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            setIsExiting(true);

            setTimeout(() => {
              onComplete?.();
            }, shouldReduceMotion
              ? 100
              : 650);
          }, 400);

          return 100;
        }

        return Math.min(next, 100);
      });
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [
    onComplete,
    shouldReduceMotion,
  ]);

  /* =========================================================
     EXIT ANIMATION
  ========================================================= */

  if (
    isExiting &&
    shouldReduceMotion
  ) {
    return null;
  }

  return (
    <motion.div
      className="Port_Preloader"
      initial={false}
      animate={
        isExiting
          ? {
              opacity: 0,
              y: -40,
            }
          : {
              opacity: 1,
              y: 0,
            }
      }
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Background glow */}

      <div
        className="Port_PreloaderGlow"
        aria-hidden="true"
      />

      {/* Content */}

      <div className="Port_PreloaderContent">
        {/* Logo */}

        <Image
          src="/Images/Port_NavIcon.png"
          alt=""
          width={72}
          height={72}
          className="Port_PreloaderLogo"
        />

        {/* Name */}

        <div className="Port_PreloaderName">
          Karthiyayini
        </div>

        {/* Progress section */}

        <div className="Port_PreloaderProgressSection">
          {/* Bar track */}

          <div className="Port_PreloaderTrack">
            {/* Bar fill */}

            <div
              className="Port_PreloaderFill"
              style={{
                width: `${progress}%`,
              }}
            />

            {/* Glow on fill edge */}

            <div
              className="Port_PreloaderFillGlow"
              style={{
                left: `${progress}%`,
              }}
            />
          </div>

          {/* Percentage */}

          <div className="Port_PreloaderPercent">
            {Math.round(progress)}
            <span className="Port_PreloaderPercentSymbol">
              %
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Preloader;
