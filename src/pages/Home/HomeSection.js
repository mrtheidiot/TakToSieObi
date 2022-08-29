import Button from "../../UI/Button/Button";
import Output from "../../UI/Output/Output";

import classes from "./HomeSection.module.css";

const HomeSection = (props) => {
  return (
    <div className={classes.wrapper}>
      <Output text={props.contentPart1} />
      <Output text={props.contentPart2} />
      <Output text={props.contentPart3} />
      <div className={classes.buttons}>
        {props.buttons.map((button) => (
          <Button button={button} key={button.id}/>
        ))}
      </div>
    </div>
  );
};

export default HomeSection;
