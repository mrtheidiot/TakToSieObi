import { useEffect } from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetchStore from "./hooks/useFetchStore";

import NavBar from "./components/NavBar/NavBar";
import LoadingSpinner from "./UI/LoadingSpinner/LoadingSpinner";
import Home from "./pages/Home/HomeList";
import CoursesList from "./pages/TrainingCourses/CoursesList";
import CourseDetails from "./pages/TrainingCourses/CourseDetails";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import Aos from "aos";
import "aos/dist/aos.css";

import classes from "./App.module.css";
import AboutMe from "./pages/AboutMe/AboutMe";

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
