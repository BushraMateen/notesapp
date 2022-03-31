
import './App.css';
import Notes from './Pages/Notes';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Note from './Pages/Note';
import {useState} from 'react';
import ListItem from './Components/ListItem';

function App() {

  let [noteList,setNoteList] = useState([]);

  const updateMyCounter = (note) => {
    setNoteList ([...noteList, note]); 
  }
  return(
    <Router>
      <Routes>
      <Route path="/" element={<Notes />}></Route>
      <Route path="/note/:id" element={<Note updateParentCounter={updateMyCounter} />}></Route>

      </Routes>
      {noteList.map((e,index)=>{
       return (
         <p key={index}>{e}</p>
     );})}

    </Router>
  );
}

export default App;
