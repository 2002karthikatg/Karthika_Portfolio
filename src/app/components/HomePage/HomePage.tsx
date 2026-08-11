/* eslint-disable */
/* @ts-nocheck */
"use client";

import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Image from "next/image";
import { FaEye, FaGithub } from "react-icons/fa";

function HomePage() {
  // ─── SKILLS DATA ───────────────────────────────────────────────────────────
  const skills = [
    { id: "react", name: "React JS", image: "/Images/Port_Skill_Reactjs.svg" },
    {
      id: "express",
      name: "Express JS",
      image: "/Images/Port_Skill_Expressjs.svg",
    },
    {
      id: "javascript",
      name: "JavaScript",
      image: "/Images/Port_Skill_JS.svg",
    },
    {
      id: "mongodb",
      name: "Mongo DB",
      image: "/Images/Port_Skill_Mongodb.svg",
    },
    { id: "node", name: "Node JS", image: "/Images/Port_Skill_Nodejs.svg" },
    {
      id: "postman",
      name: "Postman",
      image: "/Images/Port_Skill_PostmanIcon.svg",
    },
    { id: "git", name: "Git", image: "/Images/Port_Skill_Git.svg" },
    { id: "github", name: "Github", image: "/Images/Port_Skill_Github.svg" },
    {
      id: "digital ocean",
      name: "Digital Ocean",
      image: "/Images/Port_Skill_DigitalOcean.svg",
    },
    { id: "vercel", name: "Vercel", image: "/Images/Port_Skill_vercel.svg" },
    {
      id: "digital ocean",
      name: "Digital Ocean",
      image: "/Images/Port_Skill_DigitalOcean.svg",
    },
    { id: "html", name: "HTML", image: "/Images/Port_Skill_HTML5.svg" },
    {
      id: "tailwindcss",
      name: "Tailwind CSS",
      image: "/Images/Port_Skill_TailwindCSS.svg",
    },
    {
      id: "bootstrap",
      name: "Bootstrap",
      image: "/Images/Port_Skill_Bootstrap.svg",
    },
    { id: "css", name: "CSS", image: "/Images/Port_Skill_CSS3.svg" },
  ];

  const [activeSkill, setActiveSkill] = useState(0);
  const [isSkillPaused, setIsSkillPaused] = useState(false);

  // ─── Auto-rotate every 2.5 s ───────────────────────────────────────────────
  useEffect(() => {
    if (isSkillPaused) return;
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isSkillPaused]);

  // ─── Helper: get skill at offset from active ───────────────────────────────
  const getSkill = (offset: number) =>
    skills[(activeSkill + offset + skills.length) % skills.length];

  // ─── Arc slot definitions: [translateX, translateY, scale, opacity, zIndex]
  //     Slot index 0 = outer-left … 4 = outer-right
  const slots = [
    { tx: -420, ty: 28, scale: 0.82, opacity: 0.65, z: 1 }, // outer-left
    { tx: -230, ty: 60, scale: 0.92, opacity: 0.88, z: 2 }, // inner-left
    { tx: 0, ty: 110, scale: 1.0, opacity: 1.0, z: 5 }, // center (active)
    { tx: 230, ty: 60, scale: 0.92, opacity: 0.88, z: 2 }, // inner-right
    { tx: 420, ty: 28, scale: 0.82, opacity: 0.65, z: 1 }, // outer-right
  ];
const karthika_projects = [
  {
    id: 1,
    Project_Name: "Adinn Outdoors",
    Project_img: "./Images/Port_Project1_AdinnOutdoors.svg",
    Project_Link: "https://adinnoutdoors.com/",
    Github_Link: "https://github.com/your-username/adinn-outdoors",
    desc: "OUTDOOR - Hoarding Booking Platform",
  },
  {
    id: 2,
    Project_Name: "Adinn Roadshows",
    Project_img: "./Images/Port_Project2_AdinnRoadshows.svg",
    Project_Link: "https://adinnroadshows.com/",
    Github_Link: "https://github.com/your-username/adinn-roadshows",
    desc: "ROADSHOW - Vehicle Booking & Management",
  },
  {
    id: 3,
    Project_Name: "Adinn Roadshows New",
    Project_img: "./Images/Port_Project2_AdinnRoadshows.svg",
    Project_Link: "https://roadshowfrontend.netlify.app/",
    Github_Link: "https://github.com/your-username/roadshow-frontend",
    desc: "OUTDOOR ADMIN PANEL",
  },
  // Add these later
  // {
  //   id: 4,
  //   Project_Name: "React Native Project",
  //   Project_img: "./Images/...",
  //   Project_Link: "...",
  //   desc: "React Native Mobile Application",
  // },
  // {
  //   id: 5,
  //   Project_Name: "Three JS Project",
  //   Project_img: "./Images/...",
  //   Project_Link: "...",
  //   desc: "Interactive 3D Web Experience",
  // },
  // {
  //   id: 6,
  //   Project_Name: "Vehicle Info",
  //   Project_img: "./Images/...",
  //   Project_Link: "...",
  //   desc: "Vehicle Information Mobile WebView",
  // },
];

  return (
    <>
      {/* ====================================================================
          HERO SECTION
      ==================================================================== */}
      <div className="Port_HomePageMain">
        <div className="flex h-full items-center justify-around">
          <div className="Port_HomePageContent">
            <div className="Port_HomePageContent_Heading">
              <div>Hi, I'm Karthiyayini</div>
              <div className="Port_HomePageContent_SubHeading">
                Full Stack Developer
              </div>
            </div>

            <div className="Port_HomePageContent_Desc">
              I am a professional web developer with extensive experience in
              modern web applications, utilizing tools and frameworks such as
              React JS. While my expertise primarily lies in front-end
              development, I also adeptly implement backend functionalities.
            </div>

            <div className="Port_ActionSection flex items-center gap-5 my-3">
              <div className="Port_HomeResumeBtn">
                <button className="flex items-center gap-2">
                  <img
                    src="/Images/HB_resume_DownloadIcon.png"
                    className="HB_resume_DownloadIcon"
                    alt="Download"
                  />
                  <span>Download Resume</span>
                </button>
              </div>

              <div className="Port_HomeSocialIcons flex items-center gap-5">
                {[
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
                ].map((icon) => (
                  <a
                    href={icon.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Port_HomeSocialIconMain"
                    key={icon.alt}
                  >
                    <img
                      src={icon.src}
                      className="Port_HomeSocialIconImg"
                      alt={icon.alt}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      {/* ====================================================================
          ALL SECTIONS WRAPPER
      ==================================================================== */}
      <div className="Port_HomeAllSectionsWrapper">
        {/* ── ABOUT ───────────────────────────────────────────────────────── */}
        <div className="Port_HomeSectionsMain">
          <div className="Port_HomePageHeading">About Me</div>

          <div className="container Port_AboutWrapper">
            <div className="Port_AboutContent1">1.9+</div>

            <div className="Port_AboutContent2">
              <span>Years</span>
              <br />
              <span>Working</span>
              <br />
              <span>Experience</span>
            </div>

            <div className="Port_AboutContent3"></div>

            <div className="Port_AboutContent4">
              Hi, I'm{" "}
              <span className="Port_AboutContent4Bold">Karthiyayini</span>, a{" "}
              <span className="Port_AboutContent4Bold">
                MERN Stack Developer
              </span>{" "}
              based in Madurai. I specialize in building end-to-end web
              applications, from high-performance backends to dynamic, animated
              user interfaces for complex platforms like E-commerce.
            </div>
          </div>
        </div>

        {/* ── EXPERIENCE + EDUCATION ──────────────────────────────────────── */}
        <div className="Port_ExpSecMain">
          <div className="Port_ExpSecWrapper">
            {/* Professional Experience */}
            <div className="Port_ExpSecContent1">
              <div className="Port_ExpSecHeading">Professional Experience</div>
              <div className="Port_Timeline">
                <div className="Port_TimelineItem">
                  <div className="Port_TimelineIconWrapper">
                    <div className="Port_ContentLeftIcon">
                      <Image
                        alt="icon"
                        src="/Images/Port_ExpIcon3.svg"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="Port_ContentLeftIconLine"></div>
                  </div>
                  <div className="Port_TimelineContent">
                    <div className="Port_ContentHeading">
                      MERN Stack Developer
                    </div>
                    <div className="Port_CotentPara">
                      Adinn Digital (Madurai)
                    </div>
                    <div className="Port_CotentPara">Jan 2025 - Present</div>
                  </div>
                </div>

                <div className="Port_TimelineItem">
                  <div className="Port_TimelineIconWrapper">
                    <div className="Port_ContentLeftIcon">
                      <Image
                        alt="icon"
                        src="/Images/Port_ExpIcon4.svg"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="Port_ContentLeftIconLine"></div>
                  </div>
                  <div className="Port_TimelineContent">
                    <div className="Port_ContentHeading">
                      Quality Control Specialist
                    </div>
                    <div className="Port_CotentPara">
                      Eminence Business Solution (Chennai)
                    </div>
                    <div className="Port_CotentPara">
                      June 2024 - August 2024 (3 Months)
                    </div>
                  </div>
                </div>

                <div className="Port_TimelineItem">
                  <div className="Port_TimelineIconWrapper">
                    <div className="Port_ContentLeftIcon">
                      <Image
                        alt="icon"
                        src="/Images/Port_ExpIcon4.svg"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="Port_ContentLeftIconLine Port_LastLine"></div>
                  </div>
                  <div className="Port_TimelineContent">
                    <div className="Port_ContentHeading">
                      WEB Development Internship
                    </div>
                    <div className="Port_CotentPara">Cognifyz Technologies</div>
                    <div className="Port_CotentPara">
                      April 2024 - May 2024 (2 Months)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Journey */}
            <div className="Port_ExpSecContent1">
              <div className="Port_ExpSecHeading">Academic Journey</div>
              <div className="Port_Timeline">
                <div className="Port_TimelineItem">
                  <div className="Port_TimelineIconWrapper">
                    <div className="Port_ContentLeftIcon">
                      <Image
                        alt="icon"
                        src="/Images/Port_ExpIcon2.svg"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="Port_ContentLeftIconLine"></div>
                  </div>
                  <div className="Port_TimelineContent">
                    <div className="Port_ContentHeading">B.TECH (IT)</div>
                    <div className="Port_CotentPara">
                      K.L.N College of Engineering
                    </div>
                    <div className="Port_CotentPara">
                      Year of Passing - 2024
                    </div>
                  </div>
                </div>

                <div className="Port_TimelineItem">
                  <div className="Port_TimelineIconWrapper">
                    <div className="Port_ContentLeftIcon">
                      <Image
                        alt="icon"
                        src="/Images/Port_ExpIcon1.svg"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="Port_ContentLeftIconLine"></div>
                  </div>
                  <div className="Port_TimelineContent">
                    <div className="Port_ContentHeading">HSC</div>
                    <div className="Port_CotentPara">
                      E.V.R.N Girls Higher Secondary School
                    </div>
                    <div className="Port_CotentPara">
                      Year of Passing - 2020
                    </div>
                  </div>
                </div>

                <div className="Port_TimelineItem">
                  <div className="Port_TimelineIconWrapper">
                    <div className="Port_ContentLeftIcon">
                      <Image
                        alt="icon"
                        src="/Images/Port_ExpIcon1.svg"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="Port_ContentLeftIconLine Port_LastLine"></div>
                  </div>
                  <div className="Port_TimelineContent">
                    <div className="Port_ContentHeading">SSLC</div>
                    <div className="Port_CotentPara">
                      E.V.R.N Girls Higher Secondary School
                    </div>
                    <div className="Port_CotentPara">
                      Year of Passing - 2018
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================
            PROFESSIONAL SKILLSET — V-arc carousel
        ================================================================ */}
        <div
          className="Port_SkillSection"
          onMouseEnter={() => setIsSkillPaused(true)}
          onMouseLeave={() => setIsSkillPaused(false)}
        >
          {/* Heading */}
          <div className="Port_SkillHeading">Professional Skillset</div>
          <div className="Port_SkillHeadingLine"></div>

          {/* Carousel */}
          <div className="Port_SkillCarousel">
            <div className="Port_SkillViewport">
              {slots.map((slot, i) => {
                const offset = i - 2; // -2, -1, 0, +1, +2
                const skill = getSkill(offset);
                const isCenter = offset === 0;

                return (
                  <div
                    key={`slot-${i}`}
                    className="Port_SkillPosition"
                    style={{
                      /*
                       * All 5 slots share the same anchor (left: 50%).
                       * We shift each pill relative to that anchor so the
                       * center pill lands exactly in the middle regardless
                       * of screen width. The inner -50% accounts for the
                       * pill's own width so it's truly centred.
                       */
                      transform: `translateX(calc(-50% + ${slot.tx}px)) translateY(${slot.ty}px) scale(${slot.scale})`,
                      opacity: slot.opacity,
                      zIndex: slot.z,
                      cursor: isCenter ? "default" : "pointer",
                    }}
                    onClick={() => {
                      if (isCenter) return;
                      setActiveSkill(
                        (activeSkill + offset + skills.length) % skills.length,
                      );
                    }}
                  >
                    <div
                      className={`Port_SkillItem${isCenter ? " Port_SkillActive" : ""}`}
                    >
                      <Image
                        src={skill.image}
                        alt={skill.name}
                        width={isCenter ? 28 : 20}
                        height={isCenter ? 28 : 20}
                      />
                      <span>{skill.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="Port_SkillDots">
            {skills.map((_, i) => (
              <button
                key={i}
                className={`Port_SkillDot${i === activeSkill ? " Port_SkillDotActive" : ""}`}
                onClick={() => setActiveSkill(i)}
                aria-label={`Go to ${skills[i].name}`}
              />
            ))}
          </div>
        </div>
        {/* ── end skill section ── */}

        {/* =========================================
    PROJECTS SECTION
========================================= */}

        <div className="Port_ProjectSection">
          {/* HEADING */}

          <div className="Port_ProjectHeading">Projects</div>

          <div className="Port_ProjectHeadingLine"></div>

          {/* PROJECT GRID */}

          <div className="Port_ProjectGrid">
            {karthika_projects.map((project) => (
              <div className="Port_ProjectCard" key={project.id}>
                {/* IMAGE */}

                <div className="Port_ProjectImageWrapper">
                  <img
                    src={project.Project_img}
                    alt={project.Project_Name}
                    className="Port_ProjectImage"
                  />

                  {/* HOVER OVERLAY */}

                  <div className="Port_ProjectOverlay">
                    {/* LIVE WEBSITE */}

                    <a
                      href={project.Project_Link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="Port_ProjectIcon"
                      aria-label={`View ${project.Project_Name}`}
                    >
                      <FaEye />
                    </a>

                    {/* GITHUB */}

                    <a
                      href={project.Github_Link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="Port_ProjectIcon"
                      aria-label={`View ${project.Project_Name} GitHub`}
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>

                {/* PROJECT CONTENT */}

                <div className="Port_ProjectContent">
                  <div className="Port_ProjectName">{project.Project_Name}</div>

                  <div className="Port_ProjectDesc">{project.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </>
  );
}

export default HomePage;
