import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { useParams } from 'react-router-dom';

export default function Note(props) {

  let [note,setNote]=useState({})
  let noteId = useParams();


  

  let handleChange = (e) => {
    //setNote(event.target.value);
    setNote({ ...note, 'body': e.target.value });
  }
   let handleClick = () => {
     //setNote({...note,'updated': new Date()})

     setNote(prevState => ({
       note: {
         ...prevState.note,
         updated: new Date()
       }
     }))
     props.updateParentCounter(note);
     setNote('');
   }
   
   let handleDelete = () => {
    props.handleDeletes(note.id)
   
   }  

  return (
    <div className="note">
      <div className="note-header">
        <h3>
     <Link to="/"><ArrowLeft  />
      </Link>
      </h3>
      {console.log("noteid",noteId)}
      {noteId.id !== 'new' ? (
        <button onClick={handleDelete}>Delete</button>
      ) : (
        <button onClick={handleClick}>
        <Link to="/">Done</Link>
        </button>
      
      )}
      
     
      </div>
     <textarea name="body"
          onChange={handleChange} placeholder="Edit note" 
          value={note.body}/> 
   </div>
  )
}
