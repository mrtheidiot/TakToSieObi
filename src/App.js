import { useEffect } from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetchStore from "./hooks/useFetchStore";
import Aos from "aos";
import "aos/dist/aos.css";
import LoadingSpinner from "./UI/LoadingSpinner/LoadingSpinner";

import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/HomeList";
import AboutMe from "./pages/AboutMe/AboutMe";
import CoursesList from "./pages/TrainingCourses/CoursesList";
import CourseDetails from "./pages/TrainingCourses/CourseDetails";
import EventsList from "./pages/Events/EventsList";
import EventsDetails from "./pages/Events/EventsDetails";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";

import classes from "./App.module.css";

function App() {
  const isLoading = useSelector((state) => state.ui.isAppLoading);

  const { sendRequests } = useFetchStore();

  useEffect(() => {
    Aos.init({ duration: 500 });
    sendRequests([]);
  }, [Aos]);

  const loadingSpinner = (
    <div className={classes.loadingSpinnerOuter}>
      <div className={classes.loadingSpinnerInner}>
        <LoadingSpinner />
      </div>
    </div>
  );

  return (
    <div className={classes.wrapper}>
      {isLoading && loadingSpinner}
      <NavBar />
      <div className={classes.app_pages}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/treningi" exact>
          <CoursesList />
        </Route>
        <Route path="/treningi/:courselink" exact>
          <CourseDetails />
        </Route>
        <Route path="/omnie" exact>
          <AboutMe />
        </Route>
        <Route path="/wydarzenia" exact>
          <EventsList />
        </Route>
        <Route path="/wydarzenia/:eventlink">
          <EventsDetails />
        </Route>
        <Route path="/kontakt" exact>
          <Contact />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </div>
      <Footer />
    </div>
  );
}

export default App;
