import Button from "../../components/Button/Button";
import classes from "./HomeSection.module.css";
import { useSelector } from "react-redux";
import Actions from "./Actions/Actions";
import Edit from "../../UI/Actions/Edit";
import Output from "../../UI/Output/Output";

const HomeSection = (props) => {
  const homePageContent = useSelector((state) => state.home.homePageContent);
  const buttonsToCurrentSection = homePageContent.find(
    (item) => item.id === props.id
  ).buttons;

  const editMode = window.localStorage.getItem("isLoggedIn");
  // const editMode = false;

  return (
    <div className={classes.mainpagesection__main}>
      <div className={classes.mainpagesection__text}>
        <Output text={props.contentPart1}/>
        <div>{props.contentPart2}</div>
        <div>{props.contentPart3}</div>
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
      {editMode && (
        <Edit>
          <Actions id={props.id} />
        </Edit>
      )}
    </div>
  );
};

export default HomeSection;
