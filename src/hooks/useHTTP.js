import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const useHTTP = (requestFunction) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  dispatch(uiActions.toggleLoading());

  const sendRequest = useCallback(
    async (requestData) => {
      try {
        const responseData = await requestFunction(requestData);
        setData(responseData);
        // dispatch(uiActions.toggleLoading());
      } catch (error) {
        setError(error);
        // dispatch(uiActions.toggleLoading());
      }
    },
    [requestFunction]
  );
  return {
    sendRequest,
    data,
    error,
  };
};

export default useHTTP;
