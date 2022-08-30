import NavBarWide from "./NavBarWide";
import NavBarMobile from "./NavBarMobile";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { Link } from "react-router-dom";

import Logo from "./../../assets/Logo1.svg";
import classes from "./NavBar.module.css";

// Navigation Bar always shows the logo, the links or mobile modal are dependent on the viewport width
// Once admin is logged in - a toogler shows and allows the editMode to be turned on
// editMode allows admin to perform CRUD actions on the page
// logging in is inteded to be only for admin and it's possible to access via manually going to '/login'

const NavBar = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.coursesContent);
  const editMode = useSelector((state) => state.ui.editMode);

  const setEdititngModeHandler = (e) => {
    dispatch(uiActions.setEditMode(e.target.checked));
  };

  const isLoggedIn = window.localStorage.getItem("isLoggedIn");

  const navData = [
    { id: 1, title: "TRENINGI OBEDIENCE", to: "/treningi", dropdown: courses, pre: "/treningi/" },
    { id: 3, title: "WYDARZENIA", to: "/wydarzenia" },
    { id: 4, title: "JA I MOJE PSY", to: "/omnie" },
    { id: 5, title: "KONTAKT", to: "/kontakt" },
  ];

  return (
    <div className={classes.wrapper}>
      <Link to="/" className={classes.logo}>
        <img src={Logo} alt="logo TakToSieObi" />
      </Link>
      <nav className={classes.navBar_wide}>
        <NavBarWide
          navData={navData}
          isLoggedIn={isLoggedIn}
          setEdititngModeHandler={setEdititngModeHandler}
          editMode={editMode}
        />
      </nav>
      <nav className={classes.navBar_mobile}>
        <NavBarMobile
          navData={navData}
          isLoggedIn={isLoggedIn}
          setEdititngModeHandler={setEdititngModeHandler}
          editMode={editMode}
        />
      </nav>
    </div>
  );
};

export default NavBar;
