import Toggler from "../../UI/Toggler/Toggler";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import Logo from "./../../assets/Logo1.svg";
import classes from "./NavBarMobile.module.css";

// NavBarMobile shows on vewport width that is less than 868px in a form of overlay

const Overlay = ({
  navData,
  isLoggedIn,
  setEdititngModeHandler,
  onClose,
  editMode,
}) => {
  return (
    <div className={classes.overlay}>
      <div className={classes.overlay_animations}>
        <i className="fas fa-times fa-4x" onClick={onClose} />
        <NavLink to="/" className={classes.overlay_logo} onClick={onClose}>
          <img src={Logo} />
        </NavLink>
        <div className={classes.overlay_list}>
          {navData.map((link) => (
            <NavLink onClick={onClose} to={link.to}>
              {link.title}
            </NavLink>
          ))}
        </div>
        {isLoggedIn && (
          <Toggler onChange={setEdititngModeHandler} current={editMode} />
        )}
      </div>
    </div>
  );
};

const NavBarMobile = (props) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleNavBarOverlay = () => {
    setShowOverlay((prev) => !prev);
  };

  return (
    <>
      <i
        className="fas fa-bars fa-3x"
        onClick={toggleNavBarOverlay}
        data-testid="hamburger"
      />
      {showOverlay && <Overlay {...props} onClose={toggleNavBarOverlay} />}
    </>
  );
};

export default NavBarMobile;
