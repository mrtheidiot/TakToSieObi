import { Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import LoadingSpinner from "./UI/LoadingSpinner";

import Home from "./pages/Home/Home";
import TrainingCourses from "./pages/TrainingCourses/TrainingCourses";
import Login from "./components/Login/Login";
import Test from "./components/Test/Test";
import { useSelector } from "react-redux";

import classes from "./App.module.css";

function App() {
  const { status } = useSelector((state) => state.ui.requestState);

  const loadingSpinner = (
    <div className={classes.loadingSpinnerOuter}>
      <div className={classes.loadingSpinnerInner}>
        <LoadingSpinner />
      </div>
    </div>
  );

  return (
    <div className={classes.wrapper}>
      {status === "loading" && loadingSpinner}
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
    </div>
  );
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
