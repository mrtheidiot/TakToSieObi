import Output from "../../UI/Output/Output";

import classes from "./AboutMeSection.module.css";

// The text display of the AboutMe sections

const AboutMeSection = (props) => {
  return (
    <div className={classes.content} data-testid="aboutme-section">
      <h3 className={classes.title}>{props.title}</h3>
      <div className={classes.parts}>
        {props.parts.map((part, index) => (
          <div key={index}>
            <Output text={part.text} />
          </div>
        ))}
      </div>
      <div className={classes.sideImage}>
        <img src={props.sideImage} />
      </div>
    </div>
  );
};

export default AboutMeSection;
