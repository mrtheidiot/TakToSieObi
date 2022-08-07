import { homePageActions } from "./homePage-slice";
import { testActions } from "./TestStore/test-slice";
import { uiActions } from "./ui-slice";

const urls = [
  { type: "test", url: "http://localhost:8000/api/tutorials" },
  { type: "buttons", url: "http://localhost:8000/api/buttons" },
  { type: "home", url: "http://127.0.0.1:8000/api/homepage" },
  { type: "asortyment", url: "http://localhost:8000/api/tutorials" },
];

export const fetchContent = (url, identifier) => {
  // const url = urls.find((item) => item.type === identifier).url; //nie podoba mi sie to ale nie wiem
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
            const obj = {
              id: key,
              ...storeData[key],
            };
            transformedObjects.push(obj);
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

export const fetchInitialStoreData = () => {
  return async (dispatch) => {
    const fetchButtons = async () => {
      const response = await fetch("http://localhost:8000/api/buttons");
      const data = await response.json();
      return data;
    };
    const buttons = await fetchButtons();
    dispatch(
      uiActions.replaceButtons({
        buttons: buttons,
      })
    );
  };
};

export const sendContent = (newContent) => {
  const url =
    "https://taktosieobi-94781-default-rtdb.europe-west1.firebasedatabase.app/homePage.json";
  return async () => {
    const sendRequest = () => {
      fetch(`${url}/`, {
        method: "POST",
        body: JSON.stringify({ 
          title: newContent.title,
          content: newContent.content,
          buttons: newContent.buttons
         }),
      });
    };
    sendRequest();
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
