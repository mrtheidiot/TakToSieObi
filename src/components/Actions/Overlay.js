import classes from "./Overlay.module.css";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../LoadingSpinner";
import { uiActions } from "../../store/ui-slice";

const EditOverlay = (props) => {
  const dispatch = useDispatch();
  const overlayIsLoading = useSelector((state) => state.ui.overlayIsLoading);
  const status = useSelector((state) => state.ui.sendStatus);


  let content = (
    <div className={`${classes.modal_main} ${props.className}`}>
      {props.children}
    </div>
  );
  if (overlayIsLoading) {
    content = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed") {
    props.onClose();
  }

  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        {content}
        <div className={classes.buttons}>
          <button type="button" onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditOverlay;
