import MenuItem from "../MenuItem/MenuItem";
import Logo from "../MenuItem/Logo";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <div className="nav-wrapper">
      <div className="nav-section-wrapper">
        <div className="nav-secion__position">
          <div className="nav-logo">
            <Logo />
          </div>
          <div className="nav-section">
            <MenuItem
              name={"TRENING OBEDIENCE"}
              destination={"/treningi"}
              dropdown={props.trainingTitles}
            />
            <MenuItem
              name={"ASORTYMENT"}
              destination={"/asortyment"}
              dropdown={props.itemTitles}
            />
            <MenuItem name={"JA I MOJE PSY"} destination={"/omnie"} />
            <MenuItem name={"CENNIK"} destination={"/cennik"} />
            <MenuItem name={"KALENDARZ"} destination={"/kalendarz"} />
            <MenuItem name={"KONTAKT"} destination={"/kontakt"} />
            <MenuItem name={"TEST"} destination={"/test"} />
          </div>
          <div
            className="nav-section-menuicon"
            onClick={props.handleOverlayMenu}
          >
            <div className="menuIcon">
              <i class="fas fa-bars fa-3x"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
