import React from "react";
import { NavLink, Link } from "react-router-dom";

import classes from "./NavBar.module.css";
import "./../../stylus/dist/NavBar.css";

const NavBarWide = ({ navData, isLoggedIn, setEdititngModeHandler }) => {
  const navItemsList = navData.map((link) => (
    <nav className="navLink_link" key={link.id}>
      <NavLink to={`${link.url}`} activeClassName={classes.active}>
        {link.title}
      </NavLink>
      {link.dropdown && (
        <ul className="dropdown_menu dropdown_animated dropdown_animation">
          <li>
            {link.dropdown.map((item) => (
              <Link key={item.id} to={item.link}>
                {item.title}
              </Link>
            ))}
          </li>
        </ul>
      )}
    </nav>
  ));

  return (
    <section className={classes.navBar_wide}>
      {navItemsList}
      {isLoggedIn && (
        <label className={classes.switch}>
          <input type="checkbox" onChange={setEdititngModeHandler} />
          <span className={classes.slider} />
        </label>
      )}
    </section>
  );
};

export default NavBarWide;
