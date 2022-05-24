import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/components/_hero.scss";
import scroll from "../assets/scroll.jpg";
import illustration from "../assets/hero-illustration.png";
import githubIcon from "../assets/github-icon.png";
import linkedinIcon from "../assets/linkedin-icon.png";

const Hero = (props) => {
  return (
    <div className="hero">
      <div className="hero__info">
        <h1>Greetings!</h1>
        <p>
          My name is Života, <br />
          And I am Front-End Developer from Serbia.
        </p>
        <p>
          Find{" "}
          <Link to="#about" smooth>
            more about me
          </Link>
          , or <br />
          <Link to="#contact" smooth>
            get in touch
          </Link>{" "}
          in sections below.
        </p>
        <span></span>
        <div className="hero__icons">
          <a target="_blank" href="https://github.com/Zivota">
            <img src={githubIcon} alt="github icon" />
          </a>
          <a
            href="https://linkedin.com/in/zivota-kovacevic-029118176/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="linkedin icon" />
          </a>
        </div>
      </div>
      <div className="hero__illustration">
        <img src={illustration} alt="hero illustration" />
      </div>
      <img id="scrollImg" src={scroll} alt="scroll img" />
    </div>
  );
};

export default Hero;
