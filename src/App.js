
import './App.css';
import Notes from './Pages/Notes';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Note from './Pages/Note';
import {useState} from 'react';

import Header from './Components/Header';

function App() {

  let [noteList,setNoteList] = useState([]);
  
  let [noteId, setNoteId] = useState(1);

  const updateMyCounter = (note) => {

    
    setNoteList ([...noteList, note]); 
    setNoteId(noteId + 1);

  }
  
  const deleteNote = (note) => {
    
    const newNoteList = noteList.filter((item) => item.id != note.id)
    setNoteList(newNoteList);
  }

  const getNote = (noteid) => {
    const newNoteList = noteList.filter((item) => item.id == noteid);
    return newNoteList
  }

  const updateNote = (note) => {
    console.log('updated called',note);
    
    let newList = noteList.map((item) => {
      if(item.id == note.id){
        if(item.body != note.body) {
          console.log("code in second loop", item)
          return {...item, body : note.body};
        }
      }
      return item;
    })
    setNoteList(newList)

   
      }


  return(
    <Router>
       <div className="container dark">
        <div className="app">
      <Header />
      <Routes>
      <Route path="/" element={<Notes notes = {noteList} />}></Route>
      <Route path="/note/:id" element={<Note updateParentCounter={updateMyCounter} 
        deleteNote={deleteNote} getNotes = {getNote} updateNotes={updateNote} noteid = {noteId} />}></Route>
     
      </Routes>
      </div>
      </div>
    </Router>
   
  );
}

export default App;
