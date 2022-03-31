import React, {useState} from 'react'
import { Link } from 'react-router-dom'


export default function Note(props) {

  let [note,setNote]=useState()


  let handleChange = (event) => {
    setNote( event.target.value);
   
  }
   let handleClick = () => {
     props.updateParentCounter(note);
   }


  return (
   <div>
     <Link to="/"><button type="button">
    Back
</button></Link>
     <Link to="/"><button onClick={handleClick}type="button">
    Done
</button></Link>
     <textarea name="body"
          onChange={handleChange}
          value={note}/>
          
        
   </div>
    
    
  )
}
