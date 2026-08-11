import React from 'react'
import './Navbar.css';

function Footer() {
  return (
    <div className="Port_FooterMain">
      <div className="Port_FooterLayout container ">
        <div className="Port_FooterLeftContent">
          <div>Karthiyayini T G</div>
          {/* <div className='Port_FooterContentPara'>karthiyayinitg13@gmail.com</div>
          <div className='Port_FooterContentPara'>7092558277</div> */}
          <div>
            <a
              href="mailto:karthiyayinitg1312@gmail.com"
              className="Port_FooterContentPara"
            >
              karthiyayinitg1312@gmail.com
            </a>
          </div>

          <div>
            <a href="tel:+917092558277" className="Port_FooterContentPara">
              7092558277
            </a>
          </div>
        </div>
        <div className="Port_FooterRightContent">
          <div className="Port_HomeSocialIcons flex items-center gap-5">
            {[
              {
                src: "./images/HB_LinkedIcon.png",
                alt: "LinkedIn",
                href: "https://www.linkedin.com/in/karthiyayini-t-g-08a672207/",
              },
              {
                src: "./images/HB_WpIcon.png",
                alt: "WhatsApp",
                href: "https://wa.me/917092558277",
              },
              {
                src: "./images/HB_MailIcon.png",
                alt: "Mail",
                href: "mailto:karthiyayinitg1312@gmail.com",
              },
              {
                src: "./images/HB_GitHubIcon.png",
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
          <div className="Port_FooterCopyContent">
            Copyrights 2026. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer