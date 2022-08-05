import React from "react";
import { NavLink, Link } from "react-router-dom";

import Logo from "./../../assets/Logo1.svg";
import classes from "./NavBar.module.css";

const navData = [
  { title: "O MNIE", url: "/omnie" },
  { title: "ASORTYMENT", url: "/asortyment" },
  { title: "CENNIK", url: "/cennik" },
  { title: "KONTAKT", url: "/kontakt" },
  { title: "TEST", url: "/test" },
];

const NavBar = () => {
  const navItemsList = navData.map((item) => (
    <NavLink className={classes.navlink} to={`${item.address}`}>
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
      <section className={classes.navlinks}>
        {navItemsList}
      </section>
    </div>
  );
};

export default NavBar;
