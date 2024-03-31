import React from "react";
import '../style.css'
import myimage from '../assets/download.jpeg'


function Bio(){
    return(
        <div id="Bio" className="Bio">
        
          <div className="biosec1">
    <img src={myimage} alt="" />
          </div>
          <div className="biosec2">
          <h1> About me </h1>
          <p> 
           
            <b> My Name's: Abdirashid Hassan Mohamed 
            I live in Mugadishp
            Natinalty: Somali
            place birthday: Jariiman
            birthday Date: Feb-15-2003 
            My School names: is Al-abrar primary secondary school
            My university: is Jamhuriya University </b>
             </p> 
   </div>
   </div>)
}

export default Bio;
    