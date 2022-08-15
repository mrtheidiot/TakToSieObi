import "./TrainingSection.css";
import { Link } from "react-router-dom";
import Edit from "../../UI/Actions/Edit";
import Actions from "./Actions/Actions";

const TrainingSection = (props) => {
  // const editMode = window.localStorage.getItem("isLoggedIn");
  const editMode = false

  const styles1 =
    props.ifReverse === 0 ? "section-main-position" : "reverse-row";
  const styles2 =
    props.ifReverse === 0 ? "section-wrapper-1" : "section-wrapper-2";

  return (
    <>
      <div className={styles2}>
        <div className={styles1}>
          <div className="section-image">
            <img src={props.sectionImage} alt={props.title} />
          </div>
          <div className="description-wrapper">
            <Link to={`/treningi/${props.link}`}>
              <div className="description-title">{props.title}</div>
            </Link>
            <div className="description-1">{props.description1}</div>
            <div className="description-1">{props.description2}</div>
            <div className="description-1">{props.description3}</div>
            <div className="desctiption-linksprices">
              <div className="desctiption-organizator">
                Organizator: {props.organizer}
              </div>
              <div className="desctiption-koszt">Koszt: {props.price}</div>
            </div>
          </div>
        </div>
        {editMode && (
          <Edit>
            <Actions id={props.id} />
          </Edit>
        )}
      </div>
    </>
  );
};

export default TrainingSection;
