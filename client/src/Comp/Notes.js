import React, { useEffect, useState } from "react";
import "./CSS/Notes.css";
import Note from "../UsableComp/Note";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Notes() {
  const navigate = useNavigate();
  const [notes,setNotes] = useState([]);
  const [newNote, setNewnote] = useState({title:"", description:"", token:""});


   useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = sessionStorage.getItem("userId");
        const token = sessionStorage.getItem("token");
        const response = await axios.post("http://localhost:5000/getnotes", 
        {"userId":userId, "token":token} );
        // console.log(response.data);
        if(response.data === 500){
          navigate("/login");
        }else{
          setNotes(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
      fetchData();
    

  },[navigate]);

  async function handleAdd(){
     try{
       const token= sessionStorage.getItem("token");
       newNote.token = token; 
       const res = await axios.post("http://localhost:5000/addnote", newNote);
       console.log(res.data);
       if(res.data === 500){
        window.alert("Session Expired! Login Again!");
        navigate("/login")
       }else{
         setNotes([...notes, res.data]);      
       }
     }catch(error){
        console.log(error);
        window.alert(error);
     }
     setNewnote({title:"", description:"", userId:""});
  }

  function handleNoteChange(e){
     const {name, value} = e.target;
     setNewnote((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleDelete(noteId){
    try{
      const token= sessionStorage.getItem("token");
      const res = await axios.post("http://localhost:5000/deletenote",{noteId, token});
      if(res.data === 500){
        window.alert("Session Expired! Login Again")
        navigate("/login")
      }else{
        setNotes(res.data);
      }
    }catch(error){
      window.alert(error);
    }
  }


  return (
    
    <div className="app-container">
      <h1>My Notes</h1>

      <div className="add-note">
        <input type="text" name="title" value={newNote.title} onChange={handleNoteChange}/>title <br/>
        <input type="text" name="description" value={newNote.description} onChange={handleNoteChange}/>description
        <button  onClick={handleAdd} >Add</button>          
      </div>

      <div className="note-grid">
      {notes.length > 0 ? (
        notes.map((note, index) => (
          <Note key={index} title={note.title} description={note.description} id={note._id} onDelete={handleDelete} />
        ))
      ) : (
        <p>No notes available.</p>
      )}      
      </div>
    
    </div>
  );
}

export default Notes;
