import Button from "../../components/Button/Button";
import EditSection from "../../components/Edit/EditSection";
import classes from "./HomeSection.module.css";
import { useSelector } from "react-redux";
import Actions from "./HomeActions/Actions";

const HomeSection = (props) => {
  const homePageContent = useSelector((state) => state.home.homePageContent);
  const buttonsToCurrentSection = homePageContent.find((item) => item.id === props.id).buttons;
  
  // const editMode = window.localStorage.getItem("isLoggedIn");
  const editMode = false;

  return (
    <div className={classes.mainpagesection__main}>
      <div className={classes.mainpagesection__text}>
        <div>{props.contentPart1}</div>
        <div>{props.contentPart2}</div>
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
        <EditSection >
          <Actions id={props.id} />
        </EditSection>
      )}
    </div>
  );
};

export default HomeSection;
