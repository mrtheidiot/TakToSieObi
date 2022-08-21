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
import Test from "./components/Test/Test";
import Footer from './components/Footer/Footer'
import Aos from "aos";
import "aos/dist/aos.css";

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
        <div className="apps-wrapper">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/treningi" exact>
            <CoursesList />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/test">
            <Test />
          </Route>
          <Route path="/treningi/:courselink">
            <CourseDetails />
          </Route>
        </div>
      </div>
      <Footer />
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

// let str =
// "cokolwiek /bold/powiem ci/bold/ cos/nextl/ jeszcze /bold/czego nie/bold/ wiem";

// // str = str.split("/bold/");

// const cos1 = str.split("/nextl/").map((item) => <div>{item}</div>);
// const cos2 = [];
// cos1.forEach((item) => cos2.push(item.props.children));
// console.log(cos2);

// return (
// <ul className={classes.uploadbar}>
//   {cos2.map((item) => (
//     <div>
//       {item.split("/bold/").map((item2, index) => (
//         <li>{index & (2 !== 0) ? <b>{item2}</b> : item2}</li>
//       ))}
//     </div>
//   ))}
// </ul>
// );
// };
