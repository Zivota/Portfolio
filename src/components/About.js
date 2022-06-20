import "../styles/components/_about.scss";
import "../styles/_global.scss";
import Button from "../UI/Button";
import cssImg from "../assets/css.png";
import gitImg from "../assets/git-icon.png";
import htmlImg from "../assets/html.png";
import jsImg from "../assets/js.png";
import reactImg from "../assets/react.png";
import sassImg from "../assets/sass.png";
import handImg from "../assets/hand.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__info">
        <div className="about__infoHolder">
          <h2>Few Words About Me</h2>
          <p>
            Quick learner and stubborn perfectionist, enjoying constant learning
            new skills and technologies as well as improving knowledge in
            existing ones.
          </p>
          <Button className="animatedBtn" dataContent="Read more">
            <Link to="/moreaboutme">Read more</Link>
          </Button>
        </div>
        <div className="about__infoHolder">
          <h2>How I Can Contribute</h2>
          <p>
            I can work closely with designers, helping them create beautiful
            designs, code pixel-perfect layouts, and bring the website to life
            with nice animations. <br />
            Also, I enjoy problem-solving and creating fast and dynamic React
            applications.
          </p>
          <Button className="animatedBtn" dataContent="Read more">
            <Link to="/otherskills"> Read more</Link>
          </Button>
        </div>
        <div className="about__infoHolder">
          <h2>What Do I Expect</h2>
          <p>
            I am seeking a challenge, engaging projects and opportunity to grow
            and learn new skills and technologies.
          </p>
        </div>
      </div>
      {/* end of info holder */}
      <div className="about__imgHolder">
        <div className="skillCircle">
          <img src={htmlImg} alt="smth" />
          <img src={cssImg} alt="smth" />
          <img src={jsImg} alt="smth" />
          <img src={reactImg} alt="smth" />
          <img src={sassImg} alt="smth" />
          <img src={gitImg} alt="smth" />
        </div>
        <div className="handHolder">
          <img src={handImg} alt="handImg" />
        </div>
      </div>
    </div>
  );
};

export default About;
