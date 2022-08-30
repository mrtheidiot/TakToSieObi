import Banner from "../../components/Banner/Banner";
import CourseSection from "./CourseSection";
import AddOrEdit from "../../components/Overlays/ActionsOverlay/AddOrEdit";
import CoursesActions from "./Actions/CoursesActions";
import { useSelector } from "react-redux";

import classes from "./CoursesList.module.css";

const CoursesList = () => {
  const courses = useSelector((state) => state.courses.coursesContent);
  const error = useSelector(state => state.courses.error)
  const editMode = useSelector((state) => state.ui.editMode);

  return (
    <>
      <Banner />
      {error && error}
      <main className={classes.courses_container}>
        {courses.map((section, index) => (
          <div
            key={section.id}
            className="position_relative"
            data-aos={editMode ? "" : "fade-up"}
          >
            <CourseSection
              id={section.id}
              key={section.id}
              title={section.title}
              link={section.link}
              description1={section.description1}
              description2={section.description2}
              description3={section.description3}
              sectionImage={section.sectionImage}
              organizer={section.organizer}
              price={section.price}
              index={index}
            />
            {editMode && (
              <AddOrEdit edit={true}>
                <CoursesActions id={section.id} />
              </AddOrEdit>
            )}
          </div>
        ))}
      </main>
      {editMode && (
        <AddOrEdit edit={false}>
          <CoursesActions />
        </AddOrEdit>
      )}
    </>
  );
};
export default CoursesList;