import { homePageActions } from "./../homePage-slice";
import { coursesActions } from "../coursesList-slice";

export const fetchHomePage = () => {
  return async (dispatch) => {
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
  };
};

export const fetchCoursesList = () => {
  return async (dispatch) => {
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
  };
};
