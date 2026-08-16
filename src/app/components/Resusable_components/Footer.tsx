// import React from 'react'
// import './Navbar.css';

// function Footer() {
//   return (
//     <div className="Port_FooterMain">
//       <div className="Port_FooterLayout container ">
//         <div className="Port_FooterLeftContent">
//           <div>Karthiyayini T G</div>
//           {/* <div className='Port_FooterContentPara'>karthiyayinitg13@gmail.com</div>
//           <div className='Port_FooterContentPara'>7092558277</div> */}
//           <div>
//             <a
//               href="mailto:karthiyayinitg1312@gmail.com"
//               className="Port_FooterContentPara"
//             >
//               karthiyayinitg1312@gmail.com
//             </a>
//           </div>

//           <div>
//             <a href="tel:+917092558277" className="Port_FooterContentPara">
//               7092558277
//             </a>
//           </div>
//         </div>
//         <div className="Port_FooterRightContent">
//           <div className="Port_HomeSocialIcons flex items-center gap-5">
//             {[
//               {
//                 src: "/Images/HB_LinkedIcon.png",
//                 alt: "LinkedIn",
//                 href: "https://www.linkedin.com/in/karthiyayini-t-g-08a672207/",
//               },
//               {
//                 src: "/Images/HB_WpIcon.png",
//                 alt: "WhatsApp",
//                 href: "https://wa.me/917092558277",
//               },
//               {
//                 src: "/Images/HB_MailIcon.png",
//                 alt: "Mail",
//                 href: "mailto:karthiyayinitg1312@gmail.com",
//               },
//               {
//                 src: "/Images/HB_GitHubIcon.png",
//                 alt: "GitHub",
//                 href: "https://github.com/2002karthikatg",
//               },
//             ].map((icon) => (
//               <a
//                 href={icon.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="Port_HomeSocialIconMain"
//                 key={icon.alt}
//               >
//                 <img
//                   src={icon.src}
//                   className="Port_HomeSocialIconImg"
//                   alt={icon.alt}
//                 />
//               </a>
//             ))}
//           </div>
//           <div className="Port_FooterCopyContent">
//             Copyrights 2026. All Rights Reserved
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer



"use client";

import React from "react";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import "./Navbar.css";

function Footer() {
  const shouldReduceMotion =
    useReducedMotion();

  const socialIcons = [
    {
      src: "/Images/HB_LinkedIcon.png",
      alt: "LinkedIn",
      href: "https://www.linkedin.com/in/karthiyayini-t-g-08a672207/",
    },

    {
      src: "/Images/HB_WpIcon.png",
      alt: "WhatsApp",
      href: "https://wa.me/917092558277",
    },

    {
      src: "/Images/HB_MailIcon.png",
      alt: "Mail",
      href: "mailto:karthiyayinitg1312@gmail.com",
    },

    {
      src: "/Images/HB_GitHubIcon.png",
      alt: "GitHub",
      href: "https://github.com/2002karthikatg",
    },
  ];

  return (
    <footer
      className="Port_FooterMain"
      id="contact"
    >
      <motion.div
        className="Port_FooterLayout container"
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                y: 35,
              }
        }
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* ===================================================
            LEFT
        ==================================================== */}

        <div className="Port_FooterLeftContent">
          <div className="Port_FooterName">
            Karthiyayini T G
          </div>

          <div>
            <a
              href="mailto:karthiyayinitg1312@gmail.com"
              className="Port_FooterContentPara"
            >
              karthiyayinitg1312@gmail.com
            </a>
          </div>

          <div>
            <a
              href="tel:+917092558277"
              className="Port_FooterContentPara"
            >
              7092558277
            </a>
          </div>
        </div>

        {/* ===================================================
            RIGHT
        ==================================================== */}

        <div className="Port_FooterRightContent">
          <div className="Port_HomeSocialIcons">
            {socialIcons.map(
              (icon, index) => (
                <motion.a
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Port_HomeSocialIconMain"
                  key={icon.alt}
                  aria-label={icon.alt}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -5,
                          scale: 1.08,
                        }
                  }
                  whileTap={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 0.94,
                        }
                  }
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <img
                    src={icon.src}
                    className="Port_HomeSocialIconImg"
                    alt={icon.alt}
                  />
                </motion.a>
              )
            )}
          </div>

          <div className="Port_FooterCopyContent">
            Copyrights 2026. All
            Rights Reserved
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;