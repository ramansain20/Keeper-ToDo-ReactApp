import React, { useState } from "react";
import Note from "./Note";
import AddIcon from "@material-ui/icons/Add";
const InputNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    detail: "",
  });
  const [allNote, setAllNote] = useState([]);
  const noteHandler = (event) => {
    let input = event.target.value;
    let name = event.target.name;

    if (name === "title") {
      setNote((prevValue) => {
        return { title: input, detail: prevValue.detail };
      });
    } else if (name === "detail") {
      setNote((prevValue) => {
        return { title: prevValue.title, detail: input };
      });
    }
  };
  const addNote = () => {
    if (note.title && note.detail) {
      setAllNote((prevValue) => {
        return [...prevValue, note];
      });
      setNote({
        title: "",
        detail: "",
      });
    }
  };

  const deleteNote = (index) => {
    setAllNote((prevState) => {
      var newArr = [...prevState];
      newArr.splice(index, 1);
      setAllNote([...newArr]);
    });
  };
  return (
    <>
      <>
        <div className="inputContainer">
          <input
            autoComplete="off"
            name="title"
            type="text"
            placeholder="Title"
            onChange={noteHandler}
            value={note.title}
          />
          <input
            autoComplete="off"
            name="detail"
            type="text"
            placeholder="Take A Note"
            onChange={noteHandler}
            value={note.detail}
          />
          <button className="addBtn" onClick={addNote}>
            <AddIcon />
          </button>
        </div>
      </>
      <div className="container">
        {allNote &&
          allNote.map((element, index) => {
            return (
              <Note
                key={index}
                id={index}
                content={element}
                onDelete={deleteNote}
              />
            );
          })}
      </div>
    </>
  );
};
export default InputNote;
