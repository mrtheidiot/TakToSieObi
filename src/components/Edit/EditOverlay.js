import classes from "./EditOverlay.module.css";

const EditOverlay = (props) => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <div className={`${classes.modal_main} ${props.className}`}>
          {props.children}
        </div>
        <div className={classes.buttons}>
          <button type="buttons" onClick={props.accept}>
            ZAAKCEPTUJ
          </button>
          <button type="button" onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditOverlay;
