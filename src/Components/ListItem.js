import React from 'react'
import { Link } from 'react-router-dom'

export default function ListItem({note}) {

  

  let getTime = (note) => {
    return   new Date().toLocaleString();
}

  let getTitle = (note) => {
   // console.log(note);
    const title =note.body.split('\n')[0]
    //console.log('title:',title);
    //console.log("lenght:",title.length)
    if(title.length > 45) {
    //  console.log('slice:',title.slice(0,45))
      return title.slice(0,45)

    }
    return title
  }

  let getContent = (note) => {
    let title = getTitle(note)
    console.log("title:",title)
    let content = note.body.replaceAll('\n', '')
    console.log("content:",content)
    content = content.replaceAll(title, '')
    //console.log("content2:",content)
    if (content.length > 45) {
      return content.slice(0,45) + '...'
    } 
    else{
      return content
    
    }
  }
    return(
      <>
         <h3>{getTitle(note)}</h3>
         {/* <p>{note}</p> */}
         <p><span>{getTime(note)}</span>{getContent(note)}</p>
      </>

    )

  }
 

 
// // <Link>  to={`/note/${id}`}>