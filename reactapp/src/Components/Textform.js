import React, {useState} from 'react'



export default function Textform(props) {
    const handleUpClick =() =>{
        console.log("Uppercase was clicked" + text);
       let netext = text.toUpperCase();
       setText(netext);
    }
    const handleOnChange =(event) =>{
        console.log("Uppwas clicked")
        setText(event.target.value);
    }
    const[text, setText] = useState('Enter text here');
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange ={handleOnChange}id="mybox" rows="8"></textarea>
</div>
   <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
    <div className="container my-2">
      <h1>Your text summary</h1>
      <p>{text.length} characters</p>
    </div>
    </>
  );
}
