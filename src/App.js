import { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useFetchContent from "./hooks/useFetchContent";

import NavBar from "./components/NavBar/NavBar";
import LoadingSpinner from "./UI/LoadingSpinner";

import Home from "./pages/Home/Home";
import TrainingCourses from "./pages/TrainingCourses/TrainingCourses";
import Login from "./components/Login/Login";
import Test from "./components/Test/Test";

import classes from "./App.module.css";

function App() {
  const {fetchContent, status} = useFetchContent();
  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  let content;                                                                                                                                                        

  if (status !== "completed") {
    content = (
      <div className={classes.loadingSpinnerOuter}>
        <div className={classes.loadingSpinnerInner}>
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (status === "completed") {
    content = (
      <>
        <NavBar />
        <div className="app-div">
          <div className="apps-wrapper">
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/treningi" exact>
              <TrainingCourses />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/test">
              <Test />
            </Route>
          </div>
        </div>
      </>
    );
  }

  return <div className={classes.wrapper}>{content}</div>;
}

export default App;

// const trainingTitles = [
//   { title: "Trening Indywidualny", slug: "treningi/trening-indywidualny" },
//   {
//     title: "Posłuszeństwo z el. obedience",
//     slug: "treningi/posluszenstwo-el-obd",
//   },
//   { title: "Obedience 1", slug: "treningi/obedience-1" },
//   { title: "Sportowy szczeniak", slug: "treningi/sportowy-szczeniak" },
//   { title: "Treningi wspólne", slug: "treningi/treningi-wspolne" },
// ];

// const itemTitles = [
//   { title: "Szarpaki", slug: "/asortyment/szarpaki/" },
//   {
//     title: "Spódniczki standardowe",
//     slug: "/asortyment/spodniczki_standardowe",
//   },
//   {
//     title: "Spódniczki dla wysokich psow",
//     slug: "/asortyment/spodniczki_dla_wysokich_psow",
//   },
// ];

// {menuOpen && <OverlayMenu callback={handleOverlayMenu} />}
