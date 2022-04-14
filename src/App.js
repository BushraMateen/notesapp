
import './App.css';
import Notes from './Pages/Notes';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Note from './Pages/Note';
import {useState} from 'react';

import Header from './Components/Header';

function App() {

  let [noteList,setNoteList] = useState([]);
 

  const updateMyCounter = (note) => {
    setNoteList ([...noteList, note]); 
  }
  
  const deleteNote = (noteId,note) => {
    const newNote = note.filter((item) => item.id !==noteId)
    setNoteList(newNote);

  }
  return(
    <Router>
       <div className="container dark">
        <div className="app">
      <Header />
      <Routes>
      <Route path="/" element={<Notes notes = {noteList} />}></Route>
      <Route path="/note/:id" element={<Note updateParentCounter={updateMyCounter} deleteNote={deleteNote} />}></Route>
     
      </Routes>
      </div>
      </div>
    </Router>
   
  );
}

export default App;
