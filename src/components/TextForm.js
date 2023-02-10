import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick =()=>{
        console.log("uper case the use ");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange =(event)=>{
        console.log("................ ");
        setText(event.target.value)
    }
   
    
    const[text, setText] =useState('Enter the text here ');
  return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
      <button className="btn btn primary" onClick={handleUpClick}>Convertt to upercadse</button>
    </div>
<div className="container my-2">
<h1>your text Summary</h1>
<p>{text.split(" ").length} words, {text.length} character</p>
<p>{0.008*text.split(" ").length} counting</p>
</div>
</>
  )
}
