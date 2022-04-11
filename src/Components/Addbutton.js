import React from 'react'
import { Link } from 'react-router-dom'

export default function Addbutton() {
  
  return (
    <Link to="/note/new" className="floating-button">><button type="button">
    Plus
</button></Link>
    
  )
}
