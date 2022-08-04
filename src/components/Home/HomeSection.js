import Button from "../Button/Button";
import EditSection from "../Edit/EditSection";
import { useSelector } from "react-redux";
import classes from "./HomeSection.module.css";

const HomeSection = (props) => {
  const allButtons = useSelector((state) => state.ui.buttons);
  const editMode = window.localStorage.getItem("isLoggedIn");
  const buttonsToCurrentSection = allButtons.filter(
    (button) =>
      button.id === props.btn1ID ||
      button.id === props.btn2ID ||
      button.id === props.btn3ID
  );

  return (
    <div className={classes.mainpagesection__main}>
      <div className={classes.mainpagesection__text}>
        <div>{props.content}</div>
      </div>
      <div className={classes.mainpagesection__links}></div>
      <section className={classes.buttons}>
        {buttonsToCurrentSection.map((button) => (
          <Button
            key={button.id}
            title={button.title}
            internal={button.internal}
            theme={button.theme}
            redirectTo={button.redirectTo}
          />
        ))}
      </section>
      {editMode && <EditSection type="home" id={props.id} />}
    </div>
  );
};

export default HomeSection;
