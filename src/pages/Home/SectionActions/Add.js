import React, { useRef } from "react";
import EditOverlay from "../../../components/Edit/EditOverlay";
import { useDispatch } from "react-redux";
import { sendContent } from "../../../store/fetch-actions";

const Add_HomeSection = (props) => {

  const submitHandler = event => {
    event.preventDefault();
  }

  
  return (
    <EditOverlay onCLose={props.onClose}>
      <form onSubmit={submitHandler}>
        <button type="submit">Make changes</button>
      </form>
    </EditOverlay>
  );
};

export default Add_HomeSection;
