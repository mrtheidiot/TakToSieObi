import Toggler from "../../UI/Toggler/Toggler";
import { NavLink, Link } from "react-router-dom";

import "./../../stylus/dist/NavBar.css";

// NavBarWide shows on vewport width that is more than 868px in a form of overlay
// this component uses the Stylus css preprocessor

const NavBarWide = ({
  navData,
  isLoggedIn,
  setEdititngModeHandler,
  editMode,
}) => {
  const navItemsList = navData.map((link) => (
    <nav className="navLink_navElement" key={link.id}>
      <NavLink to={`${link.to}`} activeClassName="navLink_active">
        {link.title}
      </NavLink>
      {link.dropdown && (
        <ul className="dropdown_menu dropdown_animated">
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
    <>
      {navItemsList}
      {isLoggedIn && (
        <Toggler onChange={setEdititngModeHandler} current={editMode} />
      )}
    </>
  );
};

export default NavBarWide;
