import React from "react";
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
        Delete
      </button>
    </div>
  );
};
export default Note;
