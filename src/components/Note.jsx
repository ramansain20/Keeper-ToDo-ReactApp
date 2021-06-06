import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
const Note = (props) => {
  return (
    <div className="note">
      <h3>{props.content.title}</h3>
      <p>{props.content.detail}</p>
      <button
        className="deleteBtn"
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        <DeleteOutlineIcon />
      </button>
    </div>
  );
};
export default Note;
