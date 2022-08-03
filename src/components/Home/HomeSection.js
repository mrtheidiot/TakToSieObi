import Button from "../Button/Button";
import Edit from "../Edit/Edit";
import { useState } from "react";
import { useSelector } from "react-redux";
import classes from "./HomeSection.module.css";

const HomeSection = (props) => {
  const allButtons = useSelector((state) => state.ui.buttons);
  const url = useSelector((state) => state.home.url);
  const [showEdit, setShowEdit] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const buttonsToCurrentSection = allButtons.filter(
    (button) =>
      button.id === props.btn1ID ||
      button.id === props.btn2ID ||
      button.id === props.btn3ID
  );

  const showEditHandler = () => {
    setShowEdit((prevState) => !prevState);
  };

  const mouseOverHandler = () => {
    setIsHovering(true);
  };

  const mouseOutHandler = () => {
    setIsHovering(false);
  };

  return (
    <div
      className={classes.mainpagesection__main}
      onClick={showEditHandler}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
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
      {showEdit && <Edit url={url} onClose={showEditHandler}/>}
      {isHovering && <div className={classes["edit-button"]}>Edit</div>}
    </div>
  );
};

export default HomeSection;
