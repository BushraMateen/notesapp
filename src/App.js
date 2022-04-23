
import './App.css';
import Notes from './Pages/Notes';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Note from './Pages/Note';
import {useState, useEffect} from 'react';

import Header from './Components/Header';

function App() {

  let [noteList,setNoteList] = useState([]);
  
  let [noteId, setNoteId] = useState(1);

  
useEffect(() => {
  getNotes()
}, [noteId])

let updateNoteId = (id) => {
  setNoteId(id);
}

let getNotes = () => {

    fetch('http://127.0.0.1:8000/api/notes/')
      .then(res => res.json())
      .then(
        (result) => {
          setNoteList(result);
        },
        (error) => {
          console.log('error in fetch', error);
        }
      )
}

  const deleteNote = (note) => {
    const newNoteList = noteList.filter((item) => item.id != note.id)
    setNoteList(newNoteList);
  }

  const getNote = (noteid) => {
    const newNoteList = noteList.filter((item) => item.id == noteid);
    return newNoteList
  }

  let updateNotes = (id) => {
    
  }

  return(
    <Router>
       <div className="container dark">
        <div className="app">
      <Header />
      <Routes>
      <Route path="/" element={<Notes notes = {noteList} />}></Route>
      <Route path="/note/:id" element={<Note updateNoteIds = {updateNoteId} updateNotes = {updateNotes}
        deleteNote={deleteNote} getNotes = {getNote} noteid = {noteId} />}></Route>
     
      </Routes>
      </div>
      </div>
    </Router>
   
  );
}

export default App;
