import Overlay from "./Overlay";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { useState } from "react";

const Add = (props) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const dispatch = useDispatch();
  // const isOverlayVisible = useSelector((state) => state.ui.isOverlayVisible);

  const toggleOverlayHandler = () => {
    setIsOverlayVisible((prev) => !prev);
  };

  return (
    <>
      <button onClick={toggleOverlayHandler}>Dodaj Sekcję</button>
      {isOverlayVisible && (
        <Overlay onClose={toggleOverlayHandler}>{props.children}</Overlay>
      )}
    </>
  );
};

export default Add;
