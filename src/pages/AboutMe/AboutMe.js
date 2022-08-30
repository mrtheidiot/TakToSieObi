import Banner from "../../components/Banner/Banner";
import AboutMeActions from "./Actions/AboutMeActions";
import AddOrEdit from "../../components/Overlays/ActionsOverlay/AddOrEdit";
import AboutMeSection from "./AboutMeSection";
import Gallery from "../../components/Gallery/Gallery";
import { useSelector } from "react-redux";

import classes from "./AboutMe.module.css";

// This components wraps the AboutMe page sections, adds the "fade" effect and shows Add and Edit buttons if the editMode is on
// the Gallery component is displayed here, because the aos effect was interfering with the fullscreen images

const AboutMe = () => {
  const aboutMeContent = useSelector((state) => state.aboutme.aboutMeContent);
  const error = useSelector((state) => state.aboutme.error);
  const editMode = useSelector((state) => state.ui.editMode);

  return (
    <>
      <Banner id={3} />
      {error && error}
      {aboutMeContent.map((section) => (
        <div className={classes.wrapper} key={section.id}>
          <section
            data-aos={editMode ? "" : "fade-up"}
            className="position_relative"
          >
            <AboutMeSection
              title={section.title}
              parts={section.parts}
              sectionGallery={section.sectionGallery}
              sideImage={section.sideImage}
            />
            {editMode && (
              <AddOrEdit edit={true}>
                <AboutMeActions id={section.id} />
              </AddOrEdit>
            )}
          </section>
          {section.sectionGallery && (
            <Gallery size="140" sources={section.sectionGallery} />
          )}
        </div>
      ))}
      {editMode && (
        <AddOrEdit edit={false}>
          <AboutMeActions />
        </AddOrEdit>
      )}
    </>
  );
};

export default AboutMe;