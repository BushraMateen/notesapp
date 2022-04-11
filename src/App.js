
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
  return(
    <Router>
       <div className="container dark">
        <div className="app">
      <Header />
      <Routes>
      <Route path="/" element={<Notes notes = {noteList} />}></Route>
      <Route path="/note/:id" element={<Note updateParentCounter={updateMyCounter} />}></Route>
     
      </Routes>
      </div>
      </div>
    </Router>
   
  );
}

export default App;
