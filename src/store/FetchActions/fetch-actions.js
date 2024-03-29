import { homePageActions } from "./../homePage-slice";
import { coursesActions } from "../coursesList-slice";
import { aboutMeActions } from "../aboutme-slice";
import { eventsActions } from "../events-slice";
import { uiActions } from "../ui-slice";

// Redux thunk - pulls data from an API, transforms it and dispatches to store 

export const fetchHomePage = () => {
  return async (dispatch) => {
    dispatch(uiActions.setIsAppLoading(true));
    dispatch(homePageActions.setError(null));
    try {
      const response = await fetch(
        "https://taktosieobi-94781-default-rtdb.europe-west1.firebasedatabase.app/homePage.json"
      );
      if (!response.ok) {
        throw new Error(response.message);
      }
      const data = await response.json();

      let transformedObjects = [];
      for (const key in data) {
        let transformedButtons = [];
        for (const i in data[key].buttons) {
          const btn = {
            id: i,
            ...data[key].buttons[i],
          };
          transformedButtons.push(btn);
        }
        data[key].buttons = [...transformedButtons];
        const obj = {
          id: key,
          ...data[key],
        };
        transformedObjects.push(obj);
      }
      dispatch(homePageActions.replaceHomePage(transformedObjects));
    } catch (error) {
      dispatch(
        homePageActions.setError(
          error.message || "Nie udało się pobrać zawartości strony domowej"
        )
      );
    }
    dispatch(uiActions.setIsAppLoading(false));
  };
};

export const fetchCoursesList = () => {
  return async (dispatch) => {
    dispatch(uiActions.setIsAppLoading(true));
    dispatch(coursesActions.setError(null));
    try {
      const response = await fetch(
        "https://taktosieobi-94781-default-rtdb.europe-west1.firebasedatabase.app/trainingCourses.json"
      );
      if (!response.ok) {
        throw new Error(response.message);
      }
      const data = await response.json();

      let transformedObjects = [];
      for (const key in data) {
        let transformedImages = [];
        for (const i in data[key].sectionGallery) {
          const img = {
            id: i,
            link: data[key].sectionGallery[i],
          };
          transformedImages.push(img);
        }
        data[key].sectionGallery = transformedImages;
        const obj = {
          id: key,
          ...data[key],
        };
        transformedObjects.push(obj);
      }
      dispatch(coursesActions.replaceCoursesContent(transformedObjects));
    } catch (error) {
      dispatch(
        coursesActions.setError(
          error.message || "Nie udało się pobrać zawartości listy kursów."
        )
      );
    }
    dispatch(uiActions.setIsAppLoading(false));
  };
};

export const fetchAboutMe = () => {
  return async (dispatch) => {
    dispatch(uiActions.setIsAppLoading(true));
    dispatch(aboutMeActions.setError(null));
    try {
      const response = await fetch(
        "https://taktosieobi-94781-default-rtdb.europe-west1.firebasedatabase.app/aboutMe.json"
      );
      if (!response.ok) {
        throw new Error(response.message);
      }
      const data = await response.json();

      let transformedObjects = [];
      for (const key in data) {
        let transformedImages = [];
        for (const i in data[key].sectionGallery) {
          const item = data[key].sectionGallery[i];
          transformedImages.push(item);
        }
        data[key].sectionGallery = transformedImages;
        let transformedParts = [];
        for (const i in data[key].parts) {
          const part = {
            id: i,
            text: data[key].parts[i].text,
          };
          transformedParts.push(part);
        }
        data[key].parts = transformedParts;
        const obj = {
          id: key,
          ...data[key],
        };
        transformedObjects.push(obj);
      }
      dispatch(aboutMeActions.replaceAboutMe(transformedObjects));
    } catch (error) {
      dispatch(
        aboutMeActions.setError(
          error.message ||
            "Nie udało się pobrać zawartości strony Ja i Moje Psy"
        )
      );
    }
    dispatch(uiActions.setIsAppLoading(false));
  };
};

export const fetchEvents = () => {
  return async (dispatch) => {
    dispatch(uiActions.setIsAppLoading(true));
    dispatch(eventsActions.setError(null));
    try {
      const response = await fetch(
        "https://taktosieobi-94781-default-rtdb.europe-west1.firebasedatabase.app/events.json"
      );
      if (!response.ok) {
        throw new Error(response.message);
      }
      const data = await response.json();

      let transformedObjects = [];
      for (const key in data) {
        const obj = {
          id: key,
          ...data[key],
        };
        transformedObjects.push(obj);
      }
      dispatch(eventsActions.replaceEvents(transformedObjects));
    } catch (error) {
      dispatch(
        eventsActions.setError(
          error.message ||
            "Nie udało się pobrać zawartości strony wydarzeń!"
        )
      );
    }
    dispatch(uiActions.setIsAppLoading(false));
  };
};