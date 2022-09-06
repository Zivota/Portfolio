import "../styles/_global.scss";
import Navbar from "../UI/Navbar";
import Logo from "../UI/Logo";
import GoHomeBtn from "../UI/GoHomeBtn";
import TextCard from "../UI/TextCard";
import { HashLink as Link } from "react-router-hash-link";

import Button from "../UI/Button";
import AbsoluteBackground from "../UI/AbsoluteBackground";

const MoreAboutMe = () => {
  return (
    <AbsoluteBackground>
      <div className="navHolder">
        <Navbar>
          <GoHomeBtn />
          <Logo />
        </Navbar>
      </div>

      <TextCard>
        <h2> Nice to meet you!</h2>
        <p>
          Besides my love for technology and programming, I am a communicative
          and friendly person who loves spending time with friends or meeting
          new people.
          <br /> In my free time, I like watching movies and reading books,
          mostly science fiction, or playing video games. Also, I am huge coffe
          (and beer) lover. Cheers 🍺.
        </p>
        <h2>Let's work together!</h2>
        <p>
          In the business field, I find myself a very well-organized,
          responsible, and reliable person. I am curious and willing to learn
          from more experienced devs as well as explore and find a solution on
          my own.
        </p>
        <Button className="blueButton">
          <Link to="/#contact">Contact</Link>
        </Button>
      </TextCard>
    </AbsoluteBackground>
  );
};

export default MoreAboutMe;
