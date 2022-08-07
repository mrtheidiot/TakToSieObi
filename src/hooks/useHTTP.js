import { useCallback, useReducer } from "react";
import { fetchContent } from "../store/fetch-actions";
import { useDispatch } from "react-redux";

const requestReducer = (state, action) => {
  if (action.type === "SEND") {
    return {
      status: "loading",
      error: null,
      // data: null,
    };
  }

  if (action.type === "SUCCESS") {
    return {
      status: "completed",
      error: null,
      // data: action.responseData,
    };
  }

  if (action.type === "ERROR") {
    return {
      status: "completed",
      error: action.errorMessage,
    };
  }

  return state;
};

const useHTTP = (startWithLoading = false) => {
  const dispatch = useDispatch();
  const initialState = {
    status: startWithLoading ? "loading" : null,
    error: null,
    // data: null,
  };

  const [requestState, dispatchState] = useReducer(
    requestReducer,
    initialState,
  );

  // const sendRequest = useCallback(
  //   async (requestData) => {
  //     dispatchState({ type: "SEND" });
  //     try {
  //       const responseData = await requestFunction(requestData);
  //       dispatchState({ type: "SUCCESS", responseData });
  //     } catch (error) {
  //       dispatchState({
  //         type: "ERROR",
  //         errorMessage: error.message || "Ups! Coś poszło nie tak!",
  //       });
  //     }
  //   },
  //   [requestFunction]
  // );

  const sendRequest = useCallback(() => {
    dispatchState({ type: "SEND" });
    dispatch(
      fetchContent(
        "https://taktosieobi-94781-default-rtdb.europe-west1.firebasedatabase.app/homePage.json",
        "home"
      )
    )
    dispatchState({ type: "SUCCESS"  });
  }
  ,[])

  return {
    sendRequest,
    ...requestState,
  };
};

export default useHTTP;
