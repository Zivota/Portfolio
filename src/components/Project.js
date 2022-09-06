import "../styles/components/_project.scss";
import "../styles/_global.scss";
import Button from "../UI/Button";

const Project = (props) => {
  return (
    <div className={props.style} id="projects">
      <div className="project__imageHolder">
        <img src={props.img} alt={props.alt} />
      </div>
      <div className="project__infoHolder">
        <h2>{props.title}</h2>
        <h4>{props.subtitle}</h4>
        <h3>BRIEF</h3>
        <p>{props.brief}</p>

        <div className="project__btnHolder">
          <Button className="animatedBtn" dataContent="Github">
            <a href={props.github} target="_blank">
              Github
            </a>
          </Button>
          <Button className="animatedBtn" dataContent="View Live">
            <a href={props.website} target="_blank">
              View Live
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Project;
