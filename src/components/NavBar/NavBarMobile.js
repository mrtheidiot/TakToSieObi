
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./../../assets/Logo1.svg";
import classes from "./NavBar.module.css";

const Overlay = ({ navData, isLoggedIn, setEdititngModeHandler, onClose, editMode }) => {
  return (
    <div className={classes.overlay}>
      <div className={classes.overlay_animations}>
        <i className="fas fa-times fa-4x" onClick={onClose} />
        <NavLink to="/" className={classes.overlay_logo}>
          <img src={Logo} />
        </NavLink>
        <div className={classes.overlay_list}>
          {navData.map((link) => (
            <NavLink to={link.url}>{link.title}</NavLink>
          ))}
          {isLoggedIn && (
            <label className={classes.switch}>
              <input type="checkbox" onChange={setEdititngModeHandler} checked={editMode} />
              <span className={classes.slider} />
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

const NavBarMobile = (props) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const showOverlayHandler = () => {
    document.body.style.position = "fixed";
    document.body.style.top = `-${window.scrollY}px`;
    setShowOverlay(true);
  };

  const hideOverlayHandler = () => {
    document.body.style.position = "";
    document.body.style.top = "";
    setShowOverlay(false);
  };

  return (
    <div className={classes.navBar_mobile}>
      <i className="fas fa-bars fa-3x" onClick={showOverlayHandler} />
      {showOverlay && <Overlay {...props} onClose={hideOverlayHandler} />}
    </div>
  );
};

export default NavBarMobile;
