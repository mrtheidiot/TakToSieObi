import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import { useEffect } from "react";
import LoadingSpinner from "../../../UI/LoadingSpinner/LoadingSpinner";

import classes from "./Overlay.module.css";

const Overlay = (props) => {
  const dispatch = useDispatch();
  const isOverlayLoading = useSelector((state) => state.ui.isOverlayLoading);
  const closeOverlay = useSelector((state) => state.ui.hideOverlay);

  let content = props.children;

  if (isOverlayLoading && !closeOverlay) {
    content = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  useEffect(() => {
    if (closeOverlay && !isOverlayLoading) {
      dispatch(uiActions.setHideOverlay(false));
      props.onClose();
    }
  }, [closeOverlay, isOverlayLoading]);

  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>{content}</div>
      <button type="button" onClick={props.onClose}>
        Close
      </button>
    </div>
  );
};

export default Overlay;
