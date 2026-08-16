// import React from "react";
// import Image from "next/image";
// import './Navbar.css'

// function Navbar() {
//   return (
//     <div>
//       <div
//         className="Port_NavMain">
//         <div className="Port_NavContentMain">
//           <img src="./Images/Port_NavIcon.png" className='Port_Nav_contentImg' />
//           Karthiyayini
//         </div>
//         <div className='Port_NavItems'>
//           <div>Home</div>
//           <div>About</div>
//           <div>Projects</div>
//           <div>Resume</div>
//           <div>GitHub</div>
//         </div>
//         <div className="Port_NavHidded">3</div>
//       </div>
      
//     </div>
//   );
// }

// export default Navbar;



"use client";

import React, { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import "./Navbar.css";

const RESUME_URL =
  "/Karthiyayini_TG_Resume.pdf";

const NAVIGATION_ITEMS = [
  {
    label: "Home",
    href: "#home",
    type: "section",
  },

  {
    label: "About",
    href: "#about",
    type: "section",
  },

  {
    label: "Projects",
    href: "#projects",
    type: "section",
  },

  {
    label: "Resume",
    href: RESUME_URL,
    type: "external",
  },

  {
    label: "GitHub",
    href: "https://github.com/2002karthikatg",
    type: "external",
  },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] =
    useState(false);

  const shouldReduceMotion =
    useReducedMotion();

  const closeMobileNavigation = () => {
    setMobileOpen(false);
  };

  return (
    <motion.header
      className="Port_NavMain"
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: -25,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* =====================================================
          BRAND
      ====================================================== */}

      <motion.a
        href="#home"
        className="Port_NavContentMain"
        onClick={closeMobileNavigation}
        whileHover={
          shouldReduceMotion
            ? undefined
            : {
                scale: 1.025,
              }
        }
        whileTap={
          shouldReduceMotion
            ? undefined
            : {
                scale: 0.98,
              }
        }
      >
        <img
          src="/Images/Port_NavIcon.png"
          className="Port_Nav_contentImg"
          alt="Karthiyayini logo"
        />

        <span>
          Karthiyayini
        </span>
      </motion.a>

      {/* =====================================================
          DESKTOP NAVIGATION
      ====================================================== */}

      <nav
        className="Port_NavItems"
        aria-label="Main navigation"
      >
        {NAVIGATION_ITEMS.map(
          (item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={
                item.type === "external"
                  ? "_blank"
                  : undefined
              }
              rel={
                item.type === "external"
                  ? "noopener noreferrer"
                  : undefined
              }
              className="Port_NavItem"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -2,
                    }
              }
              whileTap={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 0.96,
                    }
              }
            >
              {item.label}
            </motion.a>
          )
        )}
      </nav>

      {/* Keep desktop center alignment */}

      <div
        className="Port_NavHidded"
        aria-hidden="true"
      >
        Karthiyayini
      </div>

      {/* =====================================================
          MOBILE MENU BUTTON
      ====================================================== */}

      <button
        type="button"
        className={`Port_NavMenuButton ${
          mobileOpen
            ? "Port_NavMenuButton--active"
            : ""
        }`}
        onClick={() =>
          setMobileOpen(
            (previous) => !previous
          )
        }
        aria-label={
          mobileOpen
            ? "Close navigation menu"
            : "Open navigation menu"
        }
        aria-expanded={mobileOpen}
      >
        <span />

        <span />

        <span />
      </button>

      {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            className="Port_NavMobileMenu"
            aria-label="Mobile navigation"
            initial={
              shouldReduceMotion
                ? {
                    opacity: 0,
                  }
                : {
                    opacity: 0,
                    y: -12,
                    scale: 0.98,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={
              shouldReduceMotion
                ? {
                    opacity: 0,
                  }
                : {
                    opacity: 0,
                    y: -10,
                    scale: 0.98,
                  }
            }
            transition={{
              duration: 0.25,
            }}
          >
            {NAVIGATION_ITEMS.map(
              (item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={
                    item.type ===
                    "external"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.type ===
                    "external"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="Port_NavMobileItem"
                  onClick={
                    closeMobileNavigation
                  }
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: -12,
                        }
                  }
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay:
                      index * 0.045,
                  }}
                >
                  <span>
                    {item.label}
                  </span>

                  <span className="Port_NavMobileArrow">
                    ↗
                  </span>
                </motion.a>
              )
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;