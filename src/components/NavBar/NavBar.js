import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import NavBarWide from "./NavBarWide";
import Logo from "./../../assets/Logo1.svg";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";
import "./../../stylus/dist/NavBar.css";
import NavBarMobile from "./NavBarMobile";

const NavBar = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.coursesContent);
  const editMode = useSelector((state) => state.ui.editMode);

  const isLoggedIn = window.localStorage.getItem("isLoggedIn");

  const setEdititngModeHandler = (e) => {
    dispatch(uiActions.setEditMode(e.target.checked));
  };

  const navData = [
    { id: 1, title: "TRENINGI OBEDIENCE", url: "/treningi", dropdown: courses },
    { id: 4, title: "JA I MOJE PSY", url: "/omnie" },
    { id: 3, title: "WYDARZENIA", url: "/wydarzenia" },
    { id: 5, title: "KONTAKT", url: "/kontakt" },
  ];

  // const resizeClasses =
  //   yOffset < 50
  //     ? `${classes.resizeUp} ${classes.wrapper}`
  //     : `${classes.wrapper} ${classes.resizeDown}`;

  return (
    <div className={classes.wrapper}>
      <section className={classes.logo}>
        <Link to="/">
          <img src={Logo} alt="logo TakToSieObi" />
        </Link>
      </section>
      <NavBarWide
        navData={navData}
        isLoggedIn={isLoggedIn}
        setEdititngModeHandler={setEdititngModeHandler}
      />
      <div className={classes.navBar_mobile}>
        <NavBarMobile
          navData={navData}
          isLoggedIn={isLoggedIn}
          setEdititngModeHandler={setEdititngModeHandler}
          editMode={editMode}
        />
      </div>
    </div>
  );
};

export default NavBar;
