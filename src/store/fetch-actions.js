import { homePageActions } from "./homePage-slice";
import { testActions } from "./TestStore/test-slice";
import { uiActions } from "./ui-slice";

export const fetchStoreContent = (url, identifier) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(`${url}`);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      return data;
    };

    try {
      dispatch(
        uiActions.requestStateChange({
          status: "loading",
          error: null,
        })
      );

      // fetching store data and storing in a storeData
      const storeData = await fetchData();


      dispatch(
        uiActions.requestStateChange({
          status: "completed",
          error: null,
        })
      );

      switch (identifier) {
        case "test":
          dispatch(
            testActions.replaceStore({
              items: storeData,
            })
          );
          break;
        case "buttons":
          dispatch(
            uiActions.replaceButtons({
              buttons: storeData,
            })
          );
          break;
        case "home":
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
          break;
      }
    } catch (error) {
      dispatch(
        uiActions.requestStateChange({
          status: "completed",
          error: error.message,
        })
      );
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
    };
    try {
      dispatch(
        uiActions.requestStateChange({
          status: "loading",
          error: null,
        })
      );
      await sendRequest();
      dispatch(
        uiActions.requestStateChange({
          status: "completed",
          error: null,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.requestStateChange({
          status: "completed",
          error: error.message,
        })
      );
    }
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
      dispatch(
        uiActions.requestStateChange({
          status: "loading",
          error: null,
        })
      );
      await sendRequest();
      dispatch(
        uiActions.requestStateChange({
          status: "completed",
          error: null,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.requestStateChange({
          status: "completed",
          error: error.message,
        })
      );
    }
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
