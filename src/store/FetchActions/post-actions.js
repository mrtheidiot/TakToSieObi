import { homePageActions } from "../homePage-slice";
import { coursesActions } from "../coursesList-slice";
import { aboutMeActions } from "../aboutme-slice";
import { eventsActions } from "../events-slice";
import { uiActions } from "../ui-slice";

// Redux thunk - sends data to an API and adds the content to Store

export const addHomeSection = (newSection) => {
  return async (dispatch) => {
    dispatch(uiActions.setIsOverlayLoading(true));
    if (!window.testMode) {
      try {
        const response = await fetch(
          `https://taktosieobi-94781-default-rtdb.europe-west1.firebasedatabase.app/homePage.json`,
          {
            method: "POST",
            body: JSON.stringify(newSection),
          }
        );
        if (!response.ok) {
          throw new Error("Nie udało się dodać sekcji do strony domwej!");
        }
        const data = await response.json();
        dispatch(
          homePageActions.addHomeSection({
            id: data.name,
            ...newSection,
          })
        );
        dispatch(uiActions.setHideOverlay(true));
      } catch (err) {
        dispatch(uiActions.setOverlayError(err.message));
      }
    } else {
      dispatch(
        homePageActions.addHomeSection({
          id: Math.floor(Math.random() * 1000) + 1,
          ...newSection,
        })
      );
      dispatch(uiActions.setHideOverlay(true));
    }

    dispatch(uiActions.setIsOverlayLoading(false));
  };
};

export const addCoursesSection = (newSection) => {
  return async (dispatch) => {
    dispatch(uiActions.setIsOverlayLoading(true));
    if (!window.testMode) {
      try {
        const response = await fetch(
          `https://taktosieobi-94781-default-rtdb.europe-west1.firebasedatabase.app/trainingCourses.json`,
          {
            method: "POST",
            body: JSON.stringify(newSection),
          }
        );
        if (!response.ok) {
          throw new Error("Nie udało się dodać sekcji do strony kursów!");
        }
        const data = await response.json();
        console.log({
          id: data.name,
          ...newSection,
        });
        dispatch(
          coursesActions.addCourseSection({
            id: data.name,
            ...newSection,
          })
        );
        dispatch(uiActions.setHideOverlay(true));
      } catch (err) {
        dispatch(uiActions.setOverlayError(err.message));
      }
    } else {
      dispatch(
        coursesActions.addCourseSection({
          id: Math.floor(Math.random() * 1000) + 1,
          ...newSection,
        })
      );
      dispatch(uiActions.setHideOverlay(true));
    }
    dispatch(uiActions.setIsOverlayLoading(false));
  };
};

export const addAboutMeSection = (newSection) => {
  return async (dispatch) => {
    dispatch(uiActions.setIsOverlayLoading(true));
    if (!window.testMode) {
      try {
        const response = await fetch(
          `https://taktosieobi-94781-default-rtdb.europe-west1.firebasedatabase.app/aboutMe.json`,
          {
            method: "POST",
            body: JSON.stringify(newSection),
          }
        );
        if (!response.ok) {
          throw new Error(
            "Nie udało się dodać sekcji do strony Ja i Moje Psy!"
          );
        }
        const data = await response.json();
        dispatch(
          aboutMeActions.addAboutMeSection({
            id: data.name,
            ...newSection,
          })
        );
        dispatch(uiActions.setHideOverlay(true));
      } catch (err) {
        dispatch(uiActions.setOverlayError(err.message));
      }
    } else {
      dispatch(
        aboutMeActions.addAboutMeSection({
          id: Math.floor(Math.random() * 1000) + 1,
          ...newSection,
        })
      );
      dispatch(uiActions.setHideOverlay(true));
    }
    dispatch(uiActions.setIsOverlayLoading(false));
  };
};

export const addEvent = (newSection) => {
  return async (dispatch) => {
    dispatch(uiActions.setIsOverlayLoading(true));
    if (!window.testMode) {
      try {
        const response = await fetch(
          `https://taktosieobi-94781-default-rtdb.europe-west1.firebasedatabase.app/events.json`,
          {
            method: "POST",
            body: JSON.stringify(newSection),
          }
        );
        if (!response.ok) {
          throw new Error(
            "Nie udało się dodać sekcji do strony Wydarzenia!"
          );
        }
        const data = await response.json();
        dispatch(
          eventsActions.addEventsSection({
            id: data.name,
            ...newSection,
          })
        );
        dispatch(uiActions.setHideOverlay(true));
      } catch (err) {
        dispatch(uiActions.setOverlayError(err.message));
      }
    } else {
      dispatch(
        eventsActions.addEventsSection({
          id: Math.floor(Math.random() * 1000) + 1,
          ...newSection,
        })
      );
      dispatch(uiActions.setHideOverlay(true));
    }
    dispatch(uiActions.setIsOverlayLoading(false));
  };
};