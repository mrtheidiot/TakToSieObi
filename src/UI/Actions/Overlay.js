import classes from "./Overlay.module.css";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { uiActions } from "../../store/ui-slice";
import { useEffect } from "react";

const ConfirmationOverlay = () => {
  <div className={classes.backdrop}>
    <div className={classes.modal}>
      Yes?
    </div>
  </div>;
};

const Overlay = (props) => {
  const dispatch = useDispatch();
  const overlayLoadingStatus = useSelector(
    (state) => state.ui.overlayLoadingStatus
  );
  const isOverlayLoading = useSelector((state) => state.ui.isOverlayLoading);

  let content = (
    <div className={`${classes.modal_main} ${props.className}`}>
      {props.children}
    </div>
  );
  if (isOverlayLoading) {
    content = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  useEffect(() => {
    if (isOverlayLoading === false && overlayLoadingStatus === "completed") {
      dispatch(uiActions.toogleIsOverlayVisible());
      dispatch(uiActions.setOverlayLoadingStatus("loading"));
    }
  }, [isOverlayLoading, overlayLoadingStatus, dispatch]);

  const closeOverlay = () => {
    dispatch(uiActions.toogleIsOverlayVisible());
  };
  

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

export default Overlay;
