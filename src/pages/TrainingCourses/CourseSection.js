import { Link } from "react-router-dom";
import classes from "./CourseSection.module.css";

const CrouseSection = (props) => {
  const backgroundSelector = props.index % 2;

  const background =
    backgroundSelector === 1
      ? `${classes.wrapper} ${classes.backgroundDark}`
      : `${classes.wrapper} ${classes.backgroundLight}`;

  return (
    <div className={background} data-testid="courses-section">
      <Link
        to={`/treningi/${props.link}`}
        className={classes.container}
        data-testid="coursesSection-link"
      >
        <div className={classes.image}>
          <img src={props.sectionImage} alt="piesek" />
        </div>
        <h3 className={classes.title}>{props.title}</h3>
        <p className={classes.par1}>{props.description1}</p>
        <p className={classes.par2}>{props.description2}</p>
        <p className={classes.par3}>{props.description3}</p>
        <div className={classes.price}>{props.price}</div>
      </Link>
    </div>
  );
};

export default CrouseSection;
