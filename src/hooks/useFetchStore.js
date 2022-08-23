import { useDispatch } from "react-redux";
import {
  fetchHomePage,
  fetchCoursesList,
  fetchAboutMe,
} from "../store/FetchActions/fetch-actions";

const useFetchStore = () => {
  const dispatch = useDispatch();
  const sendRequests = (requestList) => {
    if (requestList.length === 0) requestList = ["home", "courses", "aboutme"];
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
      }
    }
  };

  return { sendRequests };
};

export default useFetchStore;
