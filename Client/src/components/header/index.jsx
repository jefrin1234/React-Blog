import React from 'react'
import classes from './style.module.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className={classes.header}>
      <h2>Mern Blog App</h2>
      <ul>
        <Link to={'/'}> <li>Home</li></Link>
        <Link to={'/add-blog'}>    <li>Add A Blog</li></Link>
       
    
      </ul>
    </div>
  )
}

export default Header
