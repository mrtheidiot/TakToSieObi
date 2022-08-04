import classes from "./EditOverlay.module.css";

import Edit_HomeSection from "./EditElements/Edit_HomeSection";

const EditOverlay = (props) => {
  let elementToEdit = null;
  switch (props.type) {
    case "home":
      elementToEdit = (
        <Edit_HomeSection id={props.id} onChlose={props.onClose} />
      );
      break;
  }

  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <div className={classes.children}>{elementToEdit}</div>
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
