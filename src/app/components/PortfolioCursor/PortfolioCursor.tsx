"use client";

import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import gsap from "gsap";

import "./PortfolioCursor.css";

export default function PortfolioCursor() {
  const dotRef =
    useRef<HTMLDivElement | null>(null);

  const ringRef =
    useRef<HTMLDivElement | null>(null);

  const glowRef =
    useRef<HTMLDivElement | null>(null);

  const [enabled, setEnabled] =
    useState(false);

  const [hovering, setHovering] =
    useState(false);

  const [pressed, setPressed] =
    useState(false);

  useEffect(() => {
    /*
     * Custom cursor only for devices that actually
     * have a precise pointer / mouse.
     */
    const finePointer =
      window.matchMedia(
        "(pointer: fine)"
      ).matches;

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (
      !finePointer ||
      reducedMotion
    ) {
      setEnabled(false);

      return;
    }

    setEnabled(true);
  }, []);

  useEffect(() => {
    if (
      !enabled ||
      !dotRef.current ||
      !ringRef.current ||
      !glowRef.current
    ) {
      return;
    }

    const dot =
      dotRef.current;

    const ring =
      ringRef.current;

    const glow =
      glowRef.current;

    /*
     * Fast main dot.
     */
    const dotX =
      gsap.quickTo(
        dot,
        "x",
        {
          duration: 0.08,
          ease: "power3.out",
        }
      );

    const dotY =
      gsap.quickTo(
        dot,
        "y",
        {
          duration: 0.08,
          ease: "power3.out",
        }
      );

    /*
     * Slower ring creates trailing effect.
     */
    const ringX =
      gsap.quickTo(
        ring,
        "x",
        {
          duration: 0.32,
          ease: "power3.out",
        }
      );

    const ringY =
      gsap.quickTo(
        ring,
        "y",
        {
          duration: 0.32,
          ease: "power3.out",
        }
      );

    /*
     * Large soft glow.
     */
    const glowX =
      gsap.quickTo(
        glow,
        "x",
        {
          duration: 0.6,
          ease: "power3.out",
        }
      );

    const glowY =
      gsap.quickTo(
        glow,
        "y",
        {
          duration: 0.6,
          ease: "power3.out",
        }
      );

    const handleMouseMove = (
      event: MouseEvent
    ) => {
      dotX(event.clientX);
      dotY(event.clientY);

      ringX(event.clientX);
      ringY(event.clientY);

      glowX(event.clientX);
      glowY(event.clientY);
    };

    const handleMouseOver = (
      event: MouseEvent
    ) => {
      const target =
        event.target as HTMLElement;

      const interactive =
        target.closest(
          `
          a,
          button,
          [role="button"],
          input,
          textarea,
          .Port_ProjectCard,
          .Port_SkillItem
          `
        );

      setHovering(
        Boolean(interactive)
      );
    };

    const handleMouseDown = () => {
      setPressed(true);
    };

    const handleMouseUp = () => {
      setPressed(false);
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove,
      {
        passive: true,
      }
    );

    document.addEventListener(
      "mouseover",
      handleMouseOver
    );

    document.addEventListener(
      "mousedown",
      handleMouseDown
    );

    document.addEventListener(
      "mouseup",
      handleMouseUp
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      document.removeEventListener(
        "mouseover",
        handleMouseOver
      );

      document.removeEventListener(
        "mousedown",
        handleMouseDown
      );

      document.removeEventListener(
        "mouseup",
        handleMouseUp
      );
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      {/* Very soft background glow */}

      <div
        ref={glowRef}
        className="Port_CursorGlow"
        aria-hidden="true"
      />

      {/* Outer follower */}

      <div
        ref={ringRef}
        className={`
          Port_CursorRing
          ${
            hovering
              ? "Port_CursorRing--hover"
              : ""
          }
          ${
            pressed
              ? "Port_CursorRing--pressed"
              : ""
          }
        `}
        aria-hidden="true"
      />

      {/* Main point */}

      <div
        ref={dotRef}
        className={`
          Port_CursorDot
          ${
            hovering
              ? "Port_CursorDot--hover"
              : ""
          }
        `}
        aria-hidden="true"
      />
    </>
  );
}