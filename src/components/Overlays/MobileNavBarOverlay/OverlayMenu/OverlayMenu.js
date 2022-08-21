import "./OverlayMenu.css";
import Logo from "./../../assets/Logo1.svg";
import OverlayItem from "../OverlayItem/OverlayItem";
import { Link } from 'react-router-dom';

const OverlayMenu = ({ callback }) => {
  return (
    <div className="overlay-menu">
      <div className="overlay-subdiv">
        <div className="close-icon" onClick={callback}>
          <i class="fas fa-times fa-4x"></i>
        </div>
        
        <div className="overlay-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="overlay-links">
          <OverlayItem name={"HOME"} destination={"/"} callback={callback} />
          <OverlayItem name={"TRENING OBEDIENCE"} destination={"/treningi"} callback={callback} />
          <OverlayItem name={"ASORTYMENT"} destination={"/asortyment"} callback={callback}/>
          <OverlayItem name={"JA I MOJE PSY"} destination={"/omnie"} callback={callback}/>
          <OverlayItem name={"KALENDARZ"} destination={"/kalendarz"} callback={callback}/>
          <OverlayItem name={"KONTAKT"} destination={"/kontakt"} callback={callback}/>
        </div>
      </div>
    </div>
  );
};

export default OverlayMenu;
