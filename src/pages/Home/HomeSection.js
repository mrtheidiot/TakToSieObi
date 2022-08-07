import Button from "../../components/Button/Button";
import EditSection from "../../components/Edit/EditSection";
import classes from "./HomeSection.module.css";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import Edit from "./SectionActions/Edit";

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

  console.log(buttonsToCurrentSection);
  const editMode = window.localStorage.getItem("isLoggedIn");
  const match = useRouteMatch();

  return (
    <div className={classes.mainpagesection__main}>
      <div className={classes.mainpagesection__text}>
        <div>{props.content}</div>
      </div>
      <div className={classes.mainpagesection__links}></div>
      <section className={classes.buttons}>
        {buttonsToCurrentSection.map((button) => (
          <Button
            // key={button.id}
            title={button.title}
            internal={true}
            // theme={button.theme}
            redirectTo={button.address}
          />
        ))}
      </section>

      {editMode && (
        <EditSection path={match.path} id={props.id}>
          <Edit />
        </EditSection>
      )}
    </div>
  );
};

export default HomeSection;
