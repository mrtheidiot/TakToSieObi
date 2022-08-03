import { testActions } from "./test-slice";

export const fetchData = (url, identifier) => {
  // console.log('inside fetchdata')
  return async (dispatch) => {
    const fetchSore = async () => {
      const response = await fetch(`${url}`);
      const data = await response.json();
      return data;
      //   console.log(data);
    };

    const storeData = await fetchSore();
    // console.log("soreData: ")
    // console.log(storeData)

    switch (identifier) {
      case "test":
        dispatch(
          testActions.replaceStore({
            items: storeData,
          })
        );
    }
  };
};

export const sendData = (url, patched) => {
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
