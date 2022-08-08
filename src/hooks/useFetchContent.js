import { useCallback, useReducer } from "react";
import { fetchStoreContent } from "../store/fetch-actions";
import { useDispatch } from "react-redux";

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

const useFetchContent = (startWithLoading = false) => {
  const dispatch = useDispatch();
  const initialState = {
    status: startWithLoading ? "loading" : null,
    error: null,
  };

  const [requestState, dispatchState] = useReducer(
    requestReducer,
    initialState,
  );

  const fetchContent = useCallback(() => {
    dispatchState({ type: "SEND" });
    dispatch(
      fetchStoreContent(
        "https://taktosieobi-94781-default-rtdb.europe-west1.firebasedatabase.app/homePage.json",
        "home"
      )
    )
    dispatchState({ type: "SUCCESS"  });
  }
  ,[])

  return {
    fetchContent,
    ...requestState,
  };
};

export default useFetchContent;
