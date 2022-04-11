import React, {useState} from 'react'
import { Link } from 'react-router-dom'


export default function Note(props) {

  let [note,setNote]=useState({})


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


  return (
    <div className="note">
      <div className="note-header">
        <h3>
     <Link to="/"><button type="button">
          Back
      </button>
      </Link>
      </h3>
     <Link to="/"><button onClick={handleClick}type="button">
          Done
      </button>
      </Link>
      </div>
     <textarea name="body"
          onChange={handleChange}
          value={note.body}/> 
   </div>
  )
}
