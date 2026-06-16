import React from 'react'
import './HomePage.css'

function HomePage() {
  return (
    <>
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
                    src="./images/HB_resume_DownloadIcon.png"
                    className="HB_resume_DownloadIcon"
                  ></img>
                  <span>Download Resume</span>
                </button>
              </div>
              <div className="Port_HomeSocialIcons flex items-center gap-5">
                <div className="Port_HomeSocialIconMain">
                  <img
                    src="./images/HB_LinkedIcon.png"
                    className="Port_HomeSocialIconImg"
                  ></img>
                </div>
                <div className="Port_HomeSocialIconMain">
                  <img
                    src="./images/HB_WpIcon.png"
                    className="Port_HomeSocialIconImg"
                  ></img>
                </div>
                <div className="Port_HomeSocialIconMain">
                  <img
                    src="./images/HB_MailIcon.png"
                    className="Port_HomeSocialIconImg"
                  ></img>
                </div>
                <div className="Port_HomeSocialIconMain">
                  <img
                    src="./images/HB_GitHubIcon.png"
                    className="Port_HomeSocialIconImg"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <div className="Port_HomeSectionsMain">
        <div className="Port_HomePageHeading">About Me</div>

        <div className="flex justify-around">
          <div className="Port_AboutContent1"> 1 +</div>
          <div className="Port_AboutContent2">
            <span>Years</span> <br></br>
            <span>Working</span> <br></br>
            <span>Experience</span> 
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;