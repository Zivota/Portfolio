import "../styles/_global.scss";

import Navbar from "../UI/Navbar";
import Logo from "../UI/Logo";
import GoHomeBtn from "../UI/GoHomeBtn";
import AbsoluteBackground from "../UI/AbsoluteBackground";
import TextCard from "../UI/TextCard";

const OtherSkills = () => {
  return (
    <AbsoluteBackground>
      <div className="navHolder">
        <Navbar>
          <GoHomeBtn />
          <Logo />
        </Navbar>
      </div>

      <TextCard>
        <h2> I am comfortable with:</h2>
        <p>
          HTML/HTML5, CSS/CSS3 (Flexbox, Grid), Sass, GSAP, React, Git/Github
        </p>
        <h2> Basic knowledge in:</h2>
        <p> PHP, Python, MySQL</p>
        <h2> Other skills: </h2>
        <p>
          Adobe Photoshop {" & "} Adobe Illustrator, Figma, Web Marketing and
          Social Media Management
        </p>
      </TextCard>

      <TextCard>
        <h2> Soft skills:</h2>
        <p className="softSkills">
          Problem-Solving, <br /> <span>C</span>ommunication, <br />
          <span>R</span>eliability, <br />
          <span>E</span>nthusiasm, <br /> <span>A</span>daptability, <br />
          <span>T</span>eamwork as well as, <br />
          <span>I</span>ndependent, <br />
          <span>V</span>isualisation skills,
          <br /> <span>E</span>mpathy, <br />
          Organization.
        </p>
      </TextCard>
    </AbsoluteBackground>
  );
};

export default OtherSkills;
