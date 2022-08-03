import { homePageActions } from "./homePage-slice";
import { testActions } from "./TestStore/test-slice";
import { uiActions } from "./ui-slice";

const urls = [
  { type: "test", url: "http://localhost:8000/api/tutorials" },
  { type: "buttons", url: "http://localhost:8000/api/buttons" },
  { type: "home", url: "http://127.0.0.1:8000/api/homepage" },
  { type: "asortyment", url: "http://localhost:8000/api/tutorials" },
];

export const fetchContent = (identifier) => {
  const url = urls.find((item) => item.type === identifier).url; //nie podoba mi sie to ale nie wiem
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(`${url}`);
      const data = await response.json();
      return data;
    };

    const storeData = await fetchData();

    switch (identifier) {
      case "test":
        dispatch(
          testActions.replaceStore({
            items: storeData,
          })
        );
      case "buttons":
        dispatch(
          uiActions.replaceButtons({
            buttons: storeData,
          })
        );
      case "home":
        dispatch(
          homePageActions.replaceHomePage({
            content: storeData,
            url: url,
          })
        );
    }
  };
};

const sendData = (url, patched) => {
  return async () => {
    const sendRequest = () => {
      fetch(`${url}/${patched.id}/`, {
        method: "PUT",
        body: JSON.stringify({
          title: patched.title,
          description: patched.description,
        }),
      });
    };
    sendRequest();
  };
};
