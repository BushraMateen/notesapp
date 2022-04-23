import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { useParams } from 'react-router-dom';

export default function Note(props) {


  let noteId = useParams();

  let data = "";

  if(noteId.id !== 'new'){
    //console.log('noteid note com:', noteId);
    data = props.getNotes(noteId.id)[0].body;
    //console.log('note data from note:',data);
  }

  let [note,setNote]=useState({
    id: (noteId.id === 'new' ? props.noteid : noteId.id),
    body: data,
    updated: new Date(),
    created: new Date()
    
  })


  let handleChange = (e) => {
    setNote({ ...note, 'body': e.target.value });
  }

   let handleClick = () => {

   fetch('http://127.0.0.1:8000/api/notes/', {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
    //props.updateParentCounter(note);
    props.updateNoteIds(note.id + 1);
   }
   
   let handleDelete = () => {
    fetch(`http://127.0.0.1:8000/api/notes/${noteId.id}/`, {
      method: "DELETE",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
     
   
   }  

   let handleArrowClick = () => {
    fetch(`http://127.0.0.1:8000/api/notes/${noteId.id}/`, {
      method: "PUT",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
    //props.updateNoteIds(noteId.id);
     props.updateNotes(note);
   }

   

  return (
    <div className="note">
      <div className="note-header">
        <h3>
     <Link to="/"><ArrowLeft onClick={handleArrowClick} />
      </Link>
      </h3>
     {/* {console.log("noteid",noteId)} */}
      {noteId.id !== 'new' ? (
          <button onClick={handleDelete}><Link to="/">Delete </Link></button>
      ) : (
        <button onClick={handleClick}>
        <Link to="/">Done</Link>
        </button>
      )}
      </div>
    <textarea name="body"
          onChange={handleChange} placeholder="Edit note" 
          value={note.body}
    />  
   </div>
  )
}
