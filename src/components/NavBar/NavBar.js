import React from "react";
import { NavLink, Link } from "react-router-dom";

import Logo from "./../../assets/Logo1.svg";
import classes from "./NavBar.module.css";

const navData = [
  { title: "TRENING OBEDIENCE", url: "/treningi" },
  { title: "ASORTYMENT", url: "/asortyment" },
  { title: "WYDARZENIA", url: "/wydarzenia" },
  { title: "JA I MOJE PSY", url: "/omnie" },
  { title: "KONTAKT", url: "/kontakt" },
];

const NavBar = () => {
  const navItemsList = navData.map((item, index) => (
    <NavLink key={index} className={classes.navlink} to={`${item.url}`}>
      {item.title}
    </NavLink>
  ));

  return (
    <div className={classes.wrapper}>
      <section className={classes.logo}>
        <Link to="/">
          <img src={Logo} alt="logo TakToSieObi" />
        </Link>
      </section>
      <section className={classes.navlinks}>{navItemsList}</section>
    </div>
  );
};

export default NavBar;
