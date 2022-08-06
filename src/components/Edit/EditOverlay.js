import classes from "./EditOverlay.module.css";

// import Edit_HomeSection from "../../pages/Home/SectionActions/Edit_HomeSection";

const EditOverlay = (props) => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <div className={classes.children}>{props.children}</div>
        <button
          type="button"
          onClick={props.onClose}
          className={classes.button}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EditOverlay;
