import { uiActions } from "../ui-slice";
import { homePageActions } from "../homePage-slice";
import { coursesActions } from "../coursesList-slice";
import { aboutMeActions } from "../aboutme-slice";

export const removeSection = (identifier, id) => {
  return async (dispatch) => {
    dispatch(uiActions.setIsOverlayLoading(true));

    const deleteFunction = async (url) => {
      const response = await fetch(url, { method: "DELETE" });
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
    };

    switch (identifier) {
      case "home":
        try {
          await deleteFunction(
            `https://taktosieobi-94781-default-rtdb.europe-west1.firebasedatabase.app/homePage/${id}.json`
          );
          dispatch(homePageActions.removeHomeSection({ id }));
        } catch (err) {}
        break;

      case "courses":
        try {
          await deleteFunction(
            `https://taktosieobi-94781-default-rtdb.europe-west1.firebasedatabase.app/trainingCourses/${id}.json`
          );
          dispatch(coursesActions.removeCourseSection({ id }));
        } catch (err) {}
        break;
      case "aboutme":
        try {
          await deleteFunction(
            `https://taktosieobi-94781-default-rtdb.europe-west1.firebasedatabase.app/aboutMe/${id}.json`
          );
          dispatch(aboutMeActions.removeAboutMeSection({ id }));
        } catch (err) {}
        break;
    }

    dispatch(uiActions.setHideOverlay(true));
    dispatch(uiActions.setIsOverlayLoading(false));
  };
};
