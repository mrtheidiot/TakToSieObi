import { useDispatch } from "react-redux";
import {
  fetchHomePage,
  fetchCoursesList,
  fetchAboutMe,
  fetchEvents,
} from "../store/FetchActions/fetch-actions";

// This hook is used only once when the App components mounts, 
// it fetches the data from API and dispatch "replaceStore" actions for each redux slice
// it can be used to trigger only once dispatch (depending on the "requestList") but it hasn't been used throughout this project

const useFetchStore = () => {
  const dispatch = useDispatch();
  const sendRequests = (requestList) => {
    if (requestList.length === 0)
      requestList = ["home", "courses", "aboutme", "events"];
    for (const identifier of requestList) {
      switch (identifier) {
        case "home":
          dispatch(fetchHomePage());
          break;
        case "courses":
          dispatch(fetchCoursesList());
          break;
        case "aboutme":
          dispatch(fetchAboutMe());
          break;
        case "events":
          dispatch(fetchEvents());
          break;
      }
    }
  };

  return { sendRequests };
};

export default useFetchStore;
