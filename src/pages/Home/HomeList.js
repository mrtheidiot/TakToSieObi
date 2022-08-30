import Banner from "../../components/Banner/Banner";
import HomeSection from "./HomeSection";
import HomeActions from "./Actions/HomeActions";
import AddOrEdit from "../../components/Overlays/ActionsOverlay/AddOrEdit";
import { useSelector } from "react-redux";

import classes from "./HomeList.module.css";

// Component takes the data from the store and creates a list of sections

export const HomeList = () => {
  const homePageContent = useSelector((state) => state.home.homePageContent);
  const error = useSelector((state) => state.home.error);
  const editMode = useSelector((state) => state.ui.editMode);

  return (
    <>
      <Banner />
      {error && error}
      <main className={classes.wrapper}>
        <h3 className={classes.heading}>Witaj w Tak to się Obi! </h3>
        <p>Przedstawię Ci stronę, żebyś wiedział o co tu w ogóle chodzi:</p>
        {homePageContent.map((section) => (
          <section
            data-aos={editMode ? "" : "fade-in"}
            key={section.id}
            className="position_relative"
          >
            <HomeSection
              id={section.id}
              key={section.id}
              contentPart1={section.part1}
              contentPart2={section.part2}
              contentPage3={section.part3}
              buttons={section.buttons}
            />
            {editMode && (
              <AddOrEdit edit={true}>
                <HomeActions id={section.id} />
              </AddOrEdit>
            )}
          </section>
        ))}
        {editMode && (
          <AddOrEdit edit={false}>
            <HomeActions />
          </AddOrEdit>
        )}
      </main>
    </>
  );
};

export default HomeList;