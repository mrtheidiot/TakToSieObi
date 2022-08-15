import { useCallback, useReducer } from "react";

const requestReducer = (state, action) => {
  if (action.type === "SEND") {
    return {
      status: "loading",
      error: null,
    };
  }

  if (action.type === "SUCCESS") {
    return {
      status: "completed",
      error: null,
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

const useFetchContent = (requestFunction, startWithLoading = false) => {
  const [requestState, dispatchState] = useReducer(
    requestReducer,
    {status: startWithLoading ? "loading" : null, error: null,}
  );

  const fetchContent = useCallback(async (requestData) => {
    dispatchState({ type: "SEND" });
    try {
      // const responseData = await requestFunction(requestData)
      dispatchState({ type: "SUCCESS"  });
    } catch (error) {
      dispatchState({type: "ERROR", errorMessage: error.message || "Something went wrong!"})
    }
  }
  ,[requestFunction])

  return {
    fetchContent,
    ...requestState,
  };
};

export default useFetchContent;
