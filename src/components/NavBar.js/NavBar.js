import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import MainPicture from "./MainPicture";
import ObedienceDropdown from "./ObedienceDropdown";
import Logo from "../../assets/Logo1.svg";

const NavBar = () => {
  const [selectedLink, setSelectedLink] = useState(1);
  const [showDropdown, setShowDropdown] = useState(true);

  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };

  return (
    <div className="navbar-main-content">
      <div className="navbar-main__main">
        <div
          onClick={() => setSelectedLink(2)}
          className={selectedLink === 2 ? "bor-bot" : ""}
        >
          <Link to="/treningi" style={linkStyle}>
            TRENING OBEDIENCE
          </Link>
        </div>
        <div
          onClick={() => setSelectedLink(3)}
          className={selectedLink === 3 ? "bor-bot" : ""}
        >
          <Link to="/" style={linkStyle}>
            ASORTYMENT
          </Link>
        </div>
      </div>
        <div className="logo">
          <Link to="/" style={linkStyle}>
            <img src={Logo} />
          </Link>
        </div>
        <div className="navbar-main__main">
        <div
          onClick={() => setSelectedLink(5)}
          className={selectedLink === 5 ? "bor-bot" : ""}
        >
          <Link to="/" style={linkStyle}>
            KALENDARZ
          </Link>
        </div>
        <div
          onClick={() => setSelectedLink(6)}
          className={selectedLink === 6 ? "bor-bot" : ""}
        >
          <Link to="/" style={linkStyle}>
            KONTAKT
          </Link>
        </div>
      </div>
      {/* <MainPicture link={selectedLink} /> */}
    </div>
  );
};

export default NavBar;

// onMouseOver={() => setShowDropdown(true)}
// onMouseLeave={() => setShowDropdown(false)}
