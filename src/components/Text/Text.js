import React, { useState } from 'react'

export default function Text(props) {
  const [text, setText] = useState('');
  //handle uppercase
  const upperCase = () => {
    const upperText = text.toLocaleUpperCase();
    setText(upperText)
    props.showAlert("Converted to uppercase", "success");

  }

  //handle lowercase
  const lowerCase = () => {
    const lowerText = text.toLocaleLowerCase();
    setText(lowerText)
    props.showAlert("Converted to Lowercase", "success");
  }
  //handle the textarea state on change
  const handleChange = (event) => {
    setText(event.target.value)
  }
  //clear handler
  const clear = () => {
    setText(" ");
    props.showAlert("Cleared", "danger");
  }
  //remove extra spaces
  const removeSpace = () => {
    let cleanedStr = text.replace(/\s+/g, ' ');
    setText(cleanedStr);
    props.showAlert("Extra space removed", "success");
  }
  return (
    <>
      <div className=''>
        <h1>Text Analyzer</h1>
        <p>Word Counter | Characters Counter | Remove Extra Spaces</p>
        <div className="input-group">
          <textarea className="form-control text-area " rows="8" aria-label="With textarea" value={text} onChange={handleChange} placeholder='Your text goes here....'></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary my-3 ' onClick={upperCase}>Convert To Uppercase</button>
        <button disabled={text.length===0} className='btn btn-primary my-2 ' onClick={lowerCase}>Convert To Lowercase</button>
        <button disabled={text.length===0} className='btn btn-primary my-2 ' onClick={removeSpace}>Remove Extra Space</button>
        <button className='btn btn-primary' onClick={clear}>Clear</button>
      </div>

      <div className='my-5'>
        <h2>Your Text Summary</h2>
        <p>Your text contains <strong>{text.split(/\s+/).filter(word => word.trim() !== '').length}</strong> Words and <strong>{text.replace(/\s+/g, '').length}</strong> Characters</p>

        <p>It will take<strong> {0.008 * text.split(' ').filter(word => word.trim() !== '').length}</strong> Minutes to read</p>

        <h2 className='my-3'>Text Preview</h2>
        <div className='preview'>
          <p>{text}</p>
        </div>
      </div>
    </>
  )
}
