import React from 'react'
import { useState } from 'react'
export default function Textform(props){
    const [text,setText]=useState("Enter text here")
    
    const handleText = (event)=>{
        console.log(event.target.value);
        setText(event.target.value);
    }

    const upper = ()=>{
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase !!!",'success');
    }
    
    const lower = ()=>{
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase !!!",'success');
    }

    return(
        <div>
            <h1>{props.heading}</h1>
            <div className='my-3'>
                <textarea className='form-control' value={text} onChange={handleText}  id="myBox" rows={8}></textarea>
            </div>
            <button className="btn btn-primary my-3" onClick={upper}>Upper</button><br />
            <button className="btn btn-primary" onClick={lower}>Lower</button>

            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words {text.length} characters</p>
                <p>{0.08 * text.split(" ").length} minutes to read</p>
            </div>
        </div>
    )
}