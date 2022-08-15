import { homePageActions } from "./homePage-slice";
import { coursesActions } from "./trainingCourses-slice";
import { uiActions } from "./ui-slice";

export const fetchStoreContent = (url, identifier) => {
  return async (dispatch) => {
    dispatch(uiActions.toggleLoadingInApp());
    try {
      const fetchData = async () => {
        const response = await fetch(`${url}`);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        return data;
      };

      const storeData = await fetchData();

      switch (identifier) {
        case "home": //START REPLACING THE HOME PAGE CONTENT SECTION
          let transformedObjects = [];
          for (const key in storeData) {
            let transformedButtons = [];
            for (const id in storeData[key].buttons) {
              const obj2 = {
                id: id,
                ...storeData[key].buttons[id],
              };
              transformedButtons.push(obj2);
            }
            storeData[key].buttons = [...transformedButtons];
            const obj2 = {
              id: key,
              ...storeData[key],
            };
            transformedObjects.push(obj2);
          }
          dispatch(
            homePageActions.replaceHomePage({
              content: transformedObjects,
            })
          );
          break; //END REPLACING THE HOME PAGE CONTENT SECTION
        case "courses":
          let transformedObjects2 = [];
          for (const key in storeData) {
            const obj = {
              id: key,
              ...storeData[key],
            };
            transformedObjects2.push(obj);
          }

          dispatch(coursesActions.replaceCourses(transformedObjects2));
          dispatch(coursesActions.toggleIsUpToDate());
          break;
      }
      dispatch(uiActions.toggleLoadingInApp());
    } catch (err) {
      switch (identifier) {
        case "home":
          dispatch(
            homePageActions.setError(
              "Nie udało się pobrać zawartości strony domowej!"
            )
          );
      }
    }
  };
};

export const sendContent = (url, newContent) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(`${url}/`, {
        method: "POST",
        body: JSON.stringify(newContent),
      });
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      return data;
    };
    try {
      dispatch(uiActions.toggleIsOverlayLoading());
      await sendRequest();
    } catch (error) {}
    dispatch(uiActions.toggleIsOverlayLoading());
    dispatch(uiActions.setOverlayLoadingStatus("completed"));
  };
};

export const updateContent = (url, id, updatedContent) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(`${url}/${id}.json`, {
        method: "PUT",
        body: JSON.stringify(updatedContent),
      });
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
    };
    try {
      await sendRequest();
    } catch (error) {}
  };
};

export const deleteContent = (id) => {
  const url =
    "https://taktosieobi-94781-default-rtdb.europe-west1.firebasedatabase.app/homePage/";
  return async () => {
    const sendRequest = () => {
      fetch(`${url}/${id}/button_1.json`, {
        method: "POST",
        body: JSON.stringify({
          title: "Facebook",
          address: "https:www.facebook.pl",
          theme: "1",
          internal: false,
        }),
      });
    };
    sendRequest();
  };
};
