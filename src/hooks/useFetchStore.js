import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import {
  fetchHomePage,
  fetchCoursesList,
} from "../store/FetchActions/fetch-actions";

const useFetchStore = () => {
  const dispatch = useDispatch();
  const sendRequests = (requestList) => {
    if (requestList.length === 0) requestList = ["home", "courses"];
    for (const identifier of requestList) {
      switch (identifier) {
        case "home":
          dispatch(fetchHomePage());
          break;
        case "courses":
          dispatch(fetchCoursesList());
          break;
      }
    }
  };
  
  return { sendRequests };
};

export default useFetchStore;
