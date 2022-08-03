import { Link } from "react-router-dom";
import "./MenuItem.css";

const MenuItem = (props) => {
  return (
    <div className="dropdown">
      <div className="menuItem__main">
        <Link to={props.destination}>{props.name}</Link>
      </div>
      {props.dropdown && (
        <div className="dropdown-content">
          {props.dropdown.map((trening, index) => (
            <div className="dropdown-link" key={index}>
              <Link to={trening.slug} >
                {trening.title}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
