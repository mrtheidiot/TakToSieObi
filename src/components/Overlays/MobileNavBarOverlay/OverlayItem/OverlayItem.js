import { Link } from "react-router-dom";

import "./OverlayItem.css";

const OverlayItem = (props) => {
  return (
    <div className="overlayItem__main">
      <Link to={props.destination} onClick={props.callback}>
        {props.name}
      </Link>
    </div>
  );
};

export default OverlayItem;
