import "./TrainingSection.css";
import { Link } from "react-router-dom";

const TrainingSection = (props) => {
  const styles1 =
    props.ifReverse === 0 ? "section-main-position" : "reverse-row";
  const styles2 =
    props.ifReverse === 0 ? "section-wrapper-1" : "section-wrapper-2";

  return (
    <div className={styles2}>
      <div className={styles1}>
        <div className="section-image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="description-wrapper">
          <Link to={props.link}>
            <div className="description-title">{props.title}</div>
          </Link>
          <div className="description-1">
            {props.description.map((desc, index) => (
              <div key={index}>{desc}</div>
            ))}
          </div>
          <div className="desctiption-linksprices">
            <div className="desctiption-organizator">
              Organizator: {props.organizator}
            </div>
            <div className="desctiption-koszt">Koszt: {props.koszt}</div>
            {props.koszt2 && props.koszt2}
            <br></br>
            {props.koszt3 && props.koszt3}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingSection;
