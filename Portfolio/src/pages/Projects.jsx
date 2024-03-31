import React from 'react'
import '../style.css'
import myimage from '../assets/Js.png'
import css from'../assets/Css.jpg'
import html from '../assets/Html.jpg'

 function Projects() {
  return (
   
  <div id ="Projects"className='Projects'>
   <h1 id="Projects">Projects</h1>
   <div className='Project1'>
      <h2>Project 1</h2>
      <img src={myimage} alt="" />
   </div>
   <div className='Project2'>
      <h2>Project 2</h2>
      <img src={css} alt="" />
   </div>
   <div className='Project3'>
      <h3>Project</h3>
      <img src={html} alt="" />
   </div>
  </div>
  )
}
export default Projects
