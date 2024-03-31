import React from "react";
import '../style.css'
import myimage from '../assets/download.jpeg'

const NAME= "Abdirashid"
function body(){

     return(
        <div className="body">
<div className="bodySec1">
<h1>Hello I'm{NAME}</h1>
<p> <b> I am a full-stack developer in Mugadisho who has worked for three starts-ups here.
 My interests range from back-side, front-end, system management to mobile applications. As you can see,
 I am interested in all parts of application development.</b> </p>
<button> Fallow me</button>
</div>
<div className="bodySec2">
    <img src={myimage} alt="" />
    </div> 

</div>
     )
}

export default body;