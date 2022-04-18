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
    body: data,
    updated: new Date(),
    id: (noteId.id == 'new' ? props.noteid : noteId.id)
  })


  let handleChange = (e) => {
    //setNote(event.target.value);
    setNote({ ...note, 'body': e.target.value });
  }

   let handleClick = () => {
     //setNote({...note,'updated': new Date()})
     //console.log('noteid:',noteid);

    setNote(prevState => ({
     note: {
       ...prevState.note,
       updated: new Date(),
       id: props.noteid
     }
   }))

   //console.log('useeffect note',note);

   props.updateParentCounter(note);

   setNote('');
   
   //console.log('noteid',noteid);

   }
   
   let handleDelete = () => {
     //console.log('handleDelete',note);
    props.deleteNote(note)
   
   }  

   let handleArrowClick = () => {
     console.log('handleArrowClick');
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
