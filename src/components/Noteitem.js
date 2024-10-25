import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3 m-3">
      {/* <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i
              className="far fa-trash-alt mx-2"
              onClick={() => {
                deleteNote(note._id);
                props.showAlert("Deleted successfully", "success");
              }}
            ></i>
            <i
              className="far fa-edit mx-2"
              onClick={() => {
                updateNote(note);
              }}
            ></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div> */}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <div className="d-flex justify-content-around p-3">
            {/* <i
              className="far fa-trash-alt mx-2"
              style={{ color: "74C0FC" }}
              onClick={() => {
                deleteNote(note._id);
                props.showAlert("Deleted successfully", "success");
              }}
            ></i> */}
            <i
              className="fa-solid fa-trash fa-lg"
              style={{ color: "#74C0FC" }}
              onClick={() => {
                deleteNote(note._id);
                props.showAlert("Deleted successfully", "success");
              }}
              title="Delete this note"
            ></i>
            <i
              className="fa-solid fa-edit fa-lg"
              style={{ color: "#74C0FC" }}
              onClick={() => {
                updateNote(note);
              }}
              title="Update this note"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
