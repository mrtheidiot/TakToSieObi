import { useDispatch } from "react-redux";
import {
  fetchHomePage,
  fetchCoursesList,
  fetchAboutMe,
  fetchEvents,
} from "../store/FetchActions/fetch-actions";

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
