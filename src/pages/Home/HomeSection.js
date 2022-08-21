import { useSelector } from "react-redux";
import Button from "../../UI/Button/Button";
import Output from "../../UI/Output/Output";

import classes from "./HomeSection.module.css";

const HomeSection = (props) => {
  const homePageContent = useSelector((state) => state.home.homePageContent);
  const buttonsToCurrentSection = homePageContent.find(
    (item) => item.id === props.id
  ).buttons;

  // const editMode = window.localStorage.getItem("isLoggedIn");
  const editMode = true;

  return (
    <div className={classes.mainpagesection__main}>
      <div className={classes.mainpagesection__text}>
        <Output text={props.contentPart1}/>
        <Output text={props.contentPart2}/>
        <Output text={props.contentPart3}/>
      </div>
      <div className={classes.mainpagesection__links}></div>
      <section className={classes.buttons}>
        {buttonsToCurrentSection.map((button) => (
          <Button
          key={button.id}
          text={button.text}
          isInternal={button.isInternal}
          address={button.address}
          backgroundColor={button.backgroundColor}
          textColor={button.textColor}
          />
          ))}
      </section>
    </div>
  );
};

export default HomeSection;
