import { useCallback, useReducer } from "react";

const requestReducer = (state, action) => {
  if (action.type === "SEND") {
    return {
      status: "loading",
      error: null,
      data: null,
    };
  }

  if (action.type === "SUCCESS") {
    return {
      status: "completed",
      error: null,
      data: action.responseData,
    };
  }

  if (action.type === "ERROR") {
    return {
      status: "completed",
      error: action.errorMessage,
      data: null,
    };
  }

  return state;
};

const useHTTP = (requestFunction, startWithLoading = false) => {
  const initialState = {
    status: startWithLoading ? "loading" : null,
    error: null,
    data: null,
  };

  const [requestState, dispatchState] = useReducer(
    requestReducer,
    initialState,
  );

  const sendRequest = useCallback(
    async (requestData) => {
      dispatchState({ type: "SEND" });
      try {
        const responseData = await requestFunction(requestData);
        dispatchState({ type: "SUCCESS", responseData });
      } catch (error) {
        dispatchState({
          type: "ERROR",
          errorMessage: error.message || "Ups! Coś poszło nie tak!",
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...requestState,
  };
};

export default useHTTP;
