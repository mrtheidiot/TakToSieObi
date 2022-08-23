import { homePageActions } from "../homePage-slice";
import { coursesActions } from "../coursesList-slice";
import { aboutMeActions } from "../aboutme-slice";
import { uiActions } from "../ui-slice";

export const updateHomeSection = (updatedSection, id) => {
  return async (dispatch) => {
    dispatch(uiActions.setIsOverlayLoading(true));
    try {
      const response = await fetch(
        `https://taktosieobi-94781-default-rtdb.europe-west1.firebasedatabase.app/homePage/${id}.json`,
        {
          method: "PUT",
          body: JSON.stringify(updatedSection),
        }
      );
      if (!response.ok) {
        throw new Error(
          "Nie udało się zaktualizować zawartości strony domowej!"
        );
      }
      dispatch(
        homePageActions.changeHomeElement({
          id: id,
          updatedSection: { ...updatedSection, id: id },
        })
      );
      dispatch(uiActions.setHideOverlay(true));
    } catch (err) {
      dispatch(uiActions.setOverlayError(err.message));
    }
    dispatch(uiActions.setIsOverlayLoading(false));
  };
};

export const updateCourseSection = (updatedSection, id) => {
  return async (dispatch) => {
    dispatch(uiActions.setIsOverlayLoading(true));
    try {
      const response = await fetch(
        `https://taktosieobi-94781-default-rtdb.europe-west1.firebasedatabase.app/trainingCourses/${id}.json`,
        {
          method: "PUT",
          body: JSON.stringify(updatedSection),
        }
      );
      if (!response.ok) {
        throw new Error("Nie udało się zaktualizować zawartości strony kursów!");
      }
      dispatch(
        coursesActions.changeCourseSection({
          id: id,
          updatedSection: { ...updatedSection, id: id },
        })
      );
      dispatch(uiActions.setHideOverlay(true));
    } catch (err) {
      dispatch(uiActions.setOverlayError(err.message));
    }
    dispatch(uiActions.setIsOverlayLoading(false));
  };
};

export const updateAboutMeSection = (updatedSection, id) => {
  return async (dispatch) => {
    dispatch(uiActions.setIsOverlayLoading(true));
    try {
      const response = await fetch(
        `https://taktosieobi-94781-default-rtdb.europe-west1.firebasedatabase.app/aboutMe/${id}.json`,
        {
          method: "PUT",
          body: JSON.stringify(updatedSection),
        }
      );
      if (!response.ok) {
        throw new Error("Nie udało się zaktualizować zawartości strony Ja i Moje Psy!");
      }
      dispatch(
        aboutMeActions.changeAboutMeSection({
          id: id,
          updatedSection: { ...updatedSection, id: id },
        })
      );
      dispatch(uiActions.setHideOverlay(true));
    } catch (err) {
      dispatch(uiActions.setOverlayError(err.message));
    }
    dispatch(uiActions.setIsOverlayLoading(false));
  };
};
