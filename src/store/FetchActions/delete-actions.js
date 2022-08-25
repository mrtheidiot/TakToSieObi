import { uiActions } from "../ui-slice";
import { homePageActions } from "../homePage-slice";
import { coursesActions } from "../coursesList-slice";
import { aboutMeActions } from "../aboutme-slice";
import { testMode } from "../ui-slice";

export const removeSection = (identifier, id) => {
  return async (dispatch) => {
    dispatch(uiActions.setIsOverlayLoading(true));

    const deleteFunction = async (url) => {
      const response = await fetch(url, { method: "DELETE" });
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      dispatch(uiActions.setHideOverlay(true));
      dispatch(uiActions.setIsOverlayLoading(false));
    };

    switch (identifier) {
      case "home":
        if (testMode) {
          try {
            await deleteFunction(
              `https://taktosieobi-94781-default-rtdb.europe-west1.firebasedatabase.app/homePage/${id}.json`
            );
            dispatch(homePageActions.removeHomeSection({ id }));
          } catch (err) {
            dispatch(
              uiActions.setOverlayError(
                err.message || "Nie udało się usunąć zawartości strony domowej!"
              )
            );
            dispatch(uiActions.setIsOverlayLoading(false));
          }
        } else {
          document.body.style.position = "";
          document.body.style.top = "";
          dispatch(homePageActions.removeHomeSection({ id }));
        }
        break;
      case "courses":
        if (testMode) {
          try {
            await deleteFunction(
              `https://taktosieobi-94781-default-rtdb.europe-west1.firebasedatabase.app/trainingCourses/${id}.json`
            );
            dispatch(coursesActions.removeCourseSection({ id }));
          } catch (err) {
            dispatch(
              uiActions.setOverlayError(
                err.message || "Nie udało się usunąć zawartości strony kursów!"
              )
            );
            dispatch(uiActions.setIsOverlayLoading(false));
          }
        } else {
          document.body.style.position = "";
          document.body.style.top = "";
          dispatch(coursesActions.removeCourseSection({ id }));
        }
        break;
      case "aboutme":
        if (testMode) {
          try {
            await deleteFunction(
              `https://taktosieobi-94781-default-rtdb.europe-west1.firebasedatabase.app/aboutMe/${id}.json`
            );
            dispatch(aboutMeActions.removeAboutMeSection({ id }));
          } catch (err) {
            dispatch(
              uiActions.setOverlayError(
                err.message ||
                  "Nie udało się usunąć zawartości strony Ja i Moje Psy!"
              )
            );
            dispatch(uiActions.setIsOverlayLoading(false));
          }
        } else {
          document.body.style.position = "";
          document.body.style.top = "";
          dispatch(aboutMeActions.removeAboutMeSection({ id }));
        }
        break;
    }
  };
};
