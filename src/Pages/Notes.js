import React from 'react'

import ListItem from '../Components/ListItem'
import AddButton from '../Components/AddButton'



export default function Notes({notes}) {
  return (
    <div className="notes">
    <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
    </div>

       
    <div className="notes-list">
   
    {notes.map((note,index)=>( 
      <ListItem key={index} note={note} id={note.id}></ListItem>
      ))}
    </div>
    <AddButton />
    </div>
  )
}
