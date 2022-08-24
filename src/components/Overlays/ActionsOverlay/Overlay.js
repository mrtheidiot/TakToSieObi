import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import { useEffect } from "react";
import LoadingSpinner from "../../../UI/LoadingSpinner/LoadingSpinner";

import classes from "./Overlay.module.css";

// Overlay show the modal for edit or add actions.
// It takes the given Actions component and renders as props.children inside
// On fetch actions shows loading spinner and then closes by itself.

const Overlay = (props) => {
  const dispatch = useDispatch();
  const isOverlayLoading = useSelector((state) => state.ui.isOverlayLoading);
  const closeOverlay = useSelector((state) => state.ui.hideOverlay);
  const error = useSelector((state) => state.ui.overlayError);

  document.body.style.position = "fixed";
  document.body.style.top = `-${window.scrollY}px`;

  let content =
    isOverlayLoading && !closeOverlay ? (
      <div className="centered">
        <LoadingSpinner />
      </div>
    ) : (
      props.children
    );

  if (error) {
    content = error;
  }

  useEffect(() => {
    dispatch(uiActions.setOverlayError(null));
  }, []);

  useEffect(() => {
    if (closeOverlay && !isOverlayLoading) {
      dispatch(uiActions.setHideOverlay(false));
      props.onClose();
    }
  }, [closeOverlay, isOverlayLoading]);

  return (
    <div className={classes.backdrop}>
      <div className={classes.modal} data-testid="overlay">{content}</div>
      <button type="button" onClick={props.onClose}>
        Zamknij
      </button>
    </div>
  );
};

export default Overlay;
