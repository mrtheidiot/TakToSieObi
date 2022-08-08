import React, { useState } from "react";
import EditOverlay from "./EditOverlay";

const AddSection = (props) => {
  const  [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlayHandler = () => {
    setShowOverlay((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={toggleOverlayHandler}>Dodaj Sekcję</button>
      {showOverlay && <EditOverlay onClose={toggleOverlayHandler}>{props.children}</EditOverlay>}
    </>
  );
};

export default AddSection;
