// Note.js
import React from 'react';
import "./Note.css"



const Note = (props) => {

  function handleClick(){
    props.onDelete(props.id);
  }


  return (
    
    <div className="note">
      <h3 className="note-title">{props.title}</h3>
      <p className="note-details">{props.description}</p>
      <button className="delete-button" onClick={handleClick}>
        Delete
      </button>
    </div>
  );
};

export default Note;
