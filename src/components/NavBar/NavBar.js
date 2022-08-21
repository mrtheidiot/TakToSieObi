import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import Logo from "./../../assets/Logo1.svg";

import classes from "./NavBar.module.css";
import "./../../stylus/dist/NavBar.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.coursesContent);

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  const isLoggedIn = window.localStorage.getItem("isLoggedIn");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const setEdititngModeHandler = (e) => {
    dispatch(uiActions.setEditMode(e.target.checked));
  };

  const navData = [
    { id: 1, title: "TRENINGI OBEDIENCE", url: "/treningi", dropdown: courses },
    { id: 4, title: "JA I MOJE PSY", url: "/omnie" },
    { id: 2, title: "ASORTYMENT", url: "/asortyment" },
    { id: 3, title: "WYDARZENIA", url: "/wydarzenia" },
    { id: 5, title: "KONTAKT", url: "/kontakt" },
  ];

  const navItemsList = navData.map((item, index) => (
    <nav className="navLink_link" key={item.id}>
      <NavLink key={index} to={`${item.url}`}>
        {item.title}
      </NavLink>
      {item.dropdown && (
        <ul className="dropdown_menu dropdown_animated dropdown_animation">
          <li>
            {item.dropdown.map((item) => (
              <Link key={item.id} to={item.link}>
                {item.title}
              </Link>
            ))}
          </li>
        </ul>
      )}
    </nav>
  ));

  const resizeClasses =
    offsetY < 50
      ? `${classes.resizeUp} ${classes.wrapper}`
      : `${classes.wrapper} ${classes.resizeDown}`;

  return (
    <div className={resizeClasses}>
      <section className={classes.logo}>
        <Link to="/">
          <img src={Logo} alt="logo TakToSieObi" />
        </Link>
      </section>
      <section className={classes.navlinks}>
        {navItemsList}
        {isLoggedIn && (
          <label className={classes.switch}>
            <input type="checkbox" onChange={setEdititngModeHandler} />
            <span className={`${classes.slider} ${classes.round}`}></span>
          </label>
        )}
      </section>
    </div>
  );
};

export default NavBar;
