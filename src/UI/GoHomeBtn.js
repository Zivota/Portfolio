import { Link } from "react-router-dom";
import goBack from "../assets/goBack.png";
import "../styles/_global.scss";

const GoHomeBtn = () => {
  return (
    <Link to="/" id="backArrow">
      Go Back
      <img src={goBack} alt="back arrow" />
    </Link>
  );
};

export default GoHomeBtn;
