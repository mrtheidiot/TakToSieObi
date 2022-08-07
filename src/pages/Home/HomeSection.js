import Button from "../../components/Button/Button";
import EditSection from "../../components/Edit/EditSection";
import classes from "./HomeSection.module.css";
import { useSelector } from "react-redux";
import Edit from "./HomeActions/Edit";

const HomeSection = (props) => {
  const homePageContent = useSelector((state) => state.home.homePageContent);
  const data = homePageContent.find((item) => item.id === props.id).buttons;
  const buttonsToCurrentSection = [];
  for (const key in data) {
    const button = {
      id: key,
      ...data[key],
    };
    buttonsToCurrentSection.push(button);
  }
  const editMode = window.localStorage.getItem("isLoggedIn");

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
        <EditSection id={props.id}>
          <Edit />
        </EditSection>
      )}
    </div>
  );
};

export default HomeSection;
